/**
 * format log like you define it 
 * '{time} {id} {name}'
 *
 **/

function format(temp, source){
  let argList = [];
  let reg = temp.replace(/\/|\*|\+|\?|\||\(|\)|\[|\]|\\/g, match => {
    return `\\${match}`; 
  }).replace(/{(.*?)}/g, (i, match) => {
    argList.push(match);
    return '(.*?)';
  }).replace(/\s/g, '\\s');
  let matchs = source.match(new RegExp(reg));
  if(matchs === null){
    return null;
  }
  let extract = matchs.slice(1);
  if(extract.length !== argList.length){
    //console.log('argList: %j', argList);
   // console.log('extract: %j', extract);
    throw new Error('parse template error!!');
  }
  let result = {};
  argList.forEach((arg, i) => {
    result[arg] = extract[i]; 
  });
  return result; 
} 

module.exports = format;
