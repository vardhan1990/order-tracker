import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function emitReadyEventOnSocket(newUpdatesCallback: (newUpdates: string) => void, clockTickCallback: (clockTick: number) => void) {
    socket.on('newUpdates', (newUpdates: string) => newUpdatesCallback(JSON.parse(newUpdates)));
    socket.on('clockTick', (clockTick: number) => clockTickCallback(clockTick));
    socket.emit('ready');
  }

export { emitReadyEventOnSocket };
