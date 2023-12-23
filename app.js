const express = require('express')
const app = express()      
const env = require('dotenv')
env.config()         
app.use(express.json())
app.use(express.static(__dirname+"/public"));  //use this to use css files insie templates 

const get_any = require('./routes/get_any')
const get_mentor = require('./routes/get_mentor')
const get_index = require('./routes/get_index')

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')              
})
app.use('/api', get_any)
app.use('/api', get_mentor)
app.use('/api', get_index)



module.exports = app;