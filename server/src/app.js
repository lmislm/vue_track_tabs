const express = require('express')
const bodyParse = require('body-parser') //process JSON data easily
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors()) // security

app.post('/register',(req,res) => {
    res.send({
        message: `hello ${req.body.email}! Your users was registered!`   //注意

    })
})

app.listen(process.env.PORT || 8081)
