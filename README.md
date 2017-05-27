custom-log-parser

[![Build Status](https://travis-ci.org/hongxuanlee/custom-log-parser.svg?branch=master)](https://travis-ci.org/hongxuanlee/custom-log-parser)
[![Coverage Status](https://coveralls.io/repos/github/hongxuanlee/custom-log-parser/badge.svg?branch=master)](https://coveralls.io/github/hongxuanlee/custom-log-parser?branch=master)

parse log customize by template your set up

use `{}` symbol replace of the variable

### usage

- get info object from log

```javascript
   const {format} = require('custom-log-parser');
   const log = '2017-05-25 14:59:04 (flags: [A]) 240.0.0.1:53652 > 240.0.0.3:6152, seq: 1541464530, ack: 256, win: 65535, length: 1500 bytes';
   const temp = '{day} {time} (flags: [{flag}]) {src_ip}:{src_port} > {dest_ip}:{dest_port}, seq: {seq}, ack: {ack}, win: {win}, length: {length} bytes';
   
   format(temp, log);
   /**
    * output:
    *  {
    *    'day': '2017-05-25',
    *    'time': '14:59:04',
    *    'flag': 'A',
    *    'src_ip': '240.0.0.1',
    *    'src_port': '53652',
    *    'dest_ip': '240.0.0.3',
    *    'dest_port': '6152',
    *    'seq': '1541464530',
    *    'ack': '256',
    *    'win': '65535',
    *    'length': '1500'
    *  }
    */
```
- get log from info object

```javascript
const {reformat} = require('custom-log-parser');
const temp = '{day} {time} (flags: [{flag}]) {src_ip}:{src_port} > {dest_ip}:{dest_port}, seq: {seq}, ack: {ack}, win: {win}, length: {length} bytes';

reformat(temp, {
   'day': '2017-05-25',
   'time': '14:59:04',
   'flag': 'A',
   'src_ip': '240.0.0.1',
   'src_port': '53652',
   'dest_ip': '240.0.0.3',
   'dest_port': '6152',
   'seq': '1541464530',
   'ack': '256',
   'win': '65535',
   'length': '1500'
});
// output:  2017-05-25 14:59:04 (flags: [A]) 240.0.0.1:53652 > 240.0.0.3:6152, seq: 1541464530, ack: 256, win: 65535, length: 1500 bytes
```

- extract array for object from log file

```javascript
let dir = path.join(__dirname, '../fixtures/tcp_flow.log');
parse(dir, temp).then(data => {
  // data will be [{info_obj1}, {info_obj2}......];
}).catch(e => {
  throw e;
});

```

### test

```
npm test
```
