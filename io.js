var io = require('socket.io')();
// var socket = io();
// // listen to the server for the `add-circle` event
// socket.on('add-circle', function (data) {
//     console.log(data);
// });

io.on('connection', function (socket) {
  socket.on('send-message', function(data){
    // This will emit data received from a client and emit it to all clients
    // connected on a socket...
    io.emit('send-message', data);
  });

  console.log('Client connected to socket.io!');

});


module.exports = io;
