const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const { readPath } = require('./file-reader');

socket.on('Welcome', () => {
  console.log('Connected to server!');



  const path = process.argv[2];

  const data = {
    path: path,
  };

  console.log(`Reading from ${path}...`);

  readPath(path)
    .then(text => {
      data.text = text;
      socket.emit('read-file', data);
    })
    .catch(err => {
      socket.emit('file-error', err);
    });

  console.log('Done!');
});