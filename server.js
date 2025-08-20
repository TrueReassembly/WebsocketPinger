const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('conn');

  const interval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send('Pong');
    }
  }, 1000);

  ws.on('close', () => {
    console.log('disc');
    clearInterval(interval);
  });
});

console.log('Started :8080');