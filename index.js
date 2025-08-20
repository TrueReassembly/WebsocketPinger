const { WebSocket } = require("ws")

const wss = new WebSocket('wss://qs4k0cc4gokwgkwcsoogo8ks.51.195.138.100.sslip.io/ws')

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