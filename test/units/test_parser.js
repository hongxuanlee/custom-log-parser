const assert = require('assert');
const path = require('path');
const parse = require('../../lib/parser');

const temp = '{day} {time} (flags: [{flag}]) {src_ip}:{src_port} > {dest_ip}:{dest_port}, seq: {seq}, ack: {ack}, win: {win}, length: {length} bytes';

describe('log parser', () => {
  it('should parse tcp log', (done) => {
    let dir = path.join(__dirname, '../fixtures/tcp_flow.log');
    parse(dir, temp).then(data => {
      console.log(data);
      done();
    }).catch(e => console.log(e));
  });

});
