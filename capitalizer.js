const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('read-file', (data) => {
  const first = data.text[0].toUpperCase();
  const rest = data.text.slice(1);
  data.text = `${first}${rest}`;

  socket.emit('file-write', data);
});