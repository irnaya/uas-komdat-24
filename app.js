'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hello! ini saya Irna Sofiyawati-S1SI220332-UAS-projek-komdat\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)