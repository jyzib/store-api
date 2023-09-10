require("dotenv").config()
const express = require("express")
const errMiddleware = require("./errorpage")
const mongoose = require('mongoose')
const app = express()
const routs  = require("./routes/products")

// Middleware

app.use(express.json())

// data base

mongoose.connect(process.env.MONGO_DB).then(()=>console.log('connected')).catch((err)=>console.log(err))


app.use('/api/v1/product',routs)

// route
app.use(errMiddleware)

// rootes

app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`))
