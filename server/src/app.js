console.log('hello')
const express = require('express')
const bodyParse = require('body-parser') //process JSON data easily
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParse.json())
app.use(cors()) // security

app.get('/status',(req,res) => {
    res.send({
    message: 'hello world'
    })
})

app.listen(process.env.PORT || 8081)
