const assert = require('assert');

const log = '2017-05-25 14:59:04 (flags: [A]) 240.0.0.1:53652 > 240.0.0.3:6152, seq: 1541464530, ack: 256, win: 65535, length: 1500 bytes'; 
const temp = '{day} {time} (flags: [{flag}]) {src_ip}:{src_port} > {dest_ip}:{dest_port}, seq: {seq}, ack: {ack}, win: {win}, length: {length} bytes';

const format = require('../../lib/format');

describe('log format', () => {
  it('log info extract', () => {
    assert.deepEqual = (format(temp, log), {'day':'2017-05-25','time':'14:59:04','flag':'A','src_ip':'240.0.0.1','src_port':'53652','dest_ip':'240.0.0.3','dest_port':'6152','seq':'1541464530','ack':'256','win':'65535','length':'1500 '}); 
  });
});

