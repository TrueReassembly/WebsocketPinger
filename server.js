const { WebSocketServer } = require('ws')

const wss = new WebSocketServer({ port: 80 })

wss.on('connection', (socket) => {
  console.log("Client connected")

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`)
    socket.send('pong')
  })

  socket.on('close', () => {
    console.log("Client disconnected")
  })
})
