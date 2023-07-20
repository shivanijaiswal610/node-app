const express = require('express')
require('dotenv').config()
require('../config/db')
const app = express()
const PORT = process.env.PORT

require('./routes')(app)
app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})