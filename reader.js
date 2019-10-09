const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const { readPath } = require('./file-reader');

const path = process.argv[2];

const data = {
  path: path,
};

readPath(path)
  .then(text => {
    data.text = text;
    socket.emit('read-file', data);
  })
  .catch(err => {
    socket.emit('file-error', err);
  });
