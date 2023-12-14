// const io = require('socket.io');

const io = require('./socket.io.js')

const socket = io('https://socket-io-chat.now.sh')

socket.on('connect', () => {
  console.log('connection created.')
});

socket.on('new message', d => {
  const {
    username,
    message
  } = d;
  console.log('received: ', username, message)
});

socket.emit('add user', "Jack");