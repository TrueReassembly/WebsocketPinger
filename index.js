const WebSocket = require('ws');

const ws = new WebSocket('wss://scrapyard.reassembly.dev');

ws.on('open', () => {
    console.log('WebSocket connection established');
});

ws.on('message', (message) => {
    console.log('From Server:', message);
});

ws.on('close', () => {
    console.log('WebSocket connection closed');
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});
