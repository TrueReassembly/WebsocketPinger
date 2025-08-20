const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('conn');

  ws.on('message', (message) => {
    console.log('From Client:', message);
  });

  ws.on('close', () => {
    console.log('disc');
  });
});

console.log('Started :8080');