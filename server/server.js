const io = require('socket.io')(7890);

io.on('connection', client => {

  client.emit('Welcome');


  client.on('read-file', data => {
    console.log(`${data.path} read... text is: ${data.text}`);
    client.broadcast.emit('read-file', data);
  });

  client.on('file-write', data => {
    console.log(`Converted text in ${data.path} to ${data.text}`);
    client.broadcast.emit('file-write', data);
  });

  client.on('file-saved', () => {
    console.log('File saved!');
  });
});