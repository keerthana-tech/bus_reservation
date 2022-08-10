const express = require('express')
const mongoose = require('mongoose')




const app = express()

const url = "mongodb://localhost:27017/keerthana"

mongoose.connect(url , {useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log("connected...")
})

app.use(express.json())

app.listen(5000, function(){
    console.log('server started')
})

const usersRouter = require('./routes/users')
app.use('/users',usersRouter)

const userauthRouter = require('./routes/auth')
app.use('/auth',userauthRouter)


const admin = require('./routes/admin')
app.use('/admin',admin)

const bus = require('./routes/busRouter')
app.use('/bus',bus)