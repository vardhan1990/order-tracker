import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function emitReadyEventOnSocket(newCardCallback, timerCallback) {
    socket.on('newCard', newCardProps => newCardCallback(newCardProps));
    socket.on('timer', timer => timerCallback(timer));
    socket.emit('ready');
  } 

export { emitReadyEventOnSocket }