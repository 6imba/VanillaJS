const express = require("express")
const server = express()

server.get('/', (req, res) => {
    console.log("Hello world!");
    return "Hello world!"
})

server.listen(8000)