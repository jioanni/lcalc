const express = require('express')
const app = express()
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const path = require('path')

//connection status and body parsing middleware
app.use(volleyball)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//static file serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

//send index if all else fails
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })



app.listen(3333, console.log("Snackin' on 3333"))