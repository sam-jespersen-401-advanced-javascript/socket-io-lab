const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('Welcome', () => {
  console.log('Connected to server!');

});
