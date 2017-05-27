const assert = require('assert');
const path = require('path');
const parse = require('../../lib/parser');

const temp = '{day} {time} (flags: [{flag}]) {src_ip}:{src_port} > {dest_ip}:{dest_port}, seq: {seq}, ack: {ack}, win: {win}, length: {length} bytes';
const info = require('../fixtures/tcp_info.js');

describe('log parser', () => {
  it('should parse tcp log', (done) => {
    let dir = path.join(__dirname, '../fixtures/tcp_flow');
    parse(dir, temp).then(data => {
      assert.deepEqual(data, info);
      done();
    }).catch(e => {
      throw new Error(e);
    });
  });
  it('throw error if file not exist', (done) => {
    let dir = path.join(__dirname, '../fixtures/tcp_f');
    parse(dir).catch(() => {
      done();    
    });
  });
});
