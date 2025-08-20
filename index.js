const { WebSocket } = require("ws")

const wss = new WebSocket('wss://scrapyard.reassembly.dev/ws')

wss.on('open', () => {
    console.log("WebSocket connection established")
})

wss.on('message', (data) => {
    console.log(`Server: ${data}"`)
})

setInterval(() => {
    wss.send("ping")
    console.log("Client: ping");
}, 1000)    