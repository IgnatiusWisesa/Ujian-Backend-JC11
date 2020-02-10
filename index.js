var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

const PORT = 4040

app.use(bodyParser())
app.use(cors())
app.use(bodyParser.urlencoded({ urlencoded: false }))
app.use(bodyParser.json())
// app.use(express.static('public'))

app.get('/',((req,res)=>{
    return res.status(200).send(`<h1>Ini Home Page</h1>`)
}))

const { Authrouter } = require('./router')
app.use('/auth', Authrouter)

app.listen(PORT, ()=>console.log(`Listening on Port - ` + PORT))