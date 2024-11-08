const express = require('express')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router')
const app = express()
// use MongoDB
mongoose.connect('mongodb://localhost:27017/tokenDB')
    .then(() => console.log("DB OK"))
    .catch((err) => console.log(err))
    
const port = process.env.PORT || 3003

// middleware Միացումը
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api', router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})