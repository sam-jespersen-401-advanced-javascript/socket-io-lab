const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const toCaps = require('./capitalize-file');

socket.on('Welcome', () => {
  console.log('Connected to server!');


  socket.on('read-file', (data) => {
    console.log(`converting ${data.text}...`);
    data.text = toCaps(data.text);
    socket.emit('file-write', data);
    console.log('Done!');
  });
});
