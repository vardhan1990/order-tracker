import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function emitReadyEventOnSocket(newCardsCallback, timerCallback) {
    socket.on('newCards', newCards => newCardsCallback(JSON.parse(newCards)));
    socket.on('timer', timer => timerCallback(timer));
    socket.emit('ready');
  } 

export { emitReadyEventOnSocket }