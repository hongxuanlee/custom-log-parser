const {format, reformat} = require('./format');
const {
  exists,
  readFile
} = require('mz/fs');

const parser = (logDir, temp) => {
  return exists(logDir).then(e => {
    if(!e){
      throw new Error(`logDir ${logDir} not Exist!`);
    }
    return readFile(logDir, 'utf8').then(content => {
      let lines = content.split('\n');
      let results = [];
      lines.forEach(line => {
        if(line.length) {
          let res = format(temp, line);
          res && results.push(res);
        }
      });
      return results;
    });
  });
};

parser.reformat = reformat;

parser.format = format;

module.exports = parser;
