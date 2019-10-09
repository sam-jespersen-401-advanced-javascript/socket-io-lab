const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const { writePath } = require('./file-writer');


socket.on('file-write', ({ path, text }) => {

  writePath(path, text)
    .then(() => {
      socket.emit('file-saved');
    })
    .catch(err => {
      socket.emit('file-error', err);
    });

});