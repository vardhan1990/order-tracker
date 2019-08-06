import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function emitReadyEventOnSocket(newUpdatesCallback, clockTickCallback) {
    socket.on('newUpdates', newUpdates => newUpdatesCallback(JSON.parse(newUpdates)));
    socket.on('clockTick', clockTick => clockTickCallback(clockTick));
    socket.emit('ready');
  }

export { emitReadyEventOnSocket };
