const express = require('express')
const dotenv = require('dotenv').config()
const router = require('./routes/uniRoutes')
const port = process.env.PORT || 5000
app = express()

app.use('/api/uni',router)

app.listen(port ,()=>{ console.log(`Server started on ${port}`)})