/* eslint-disable no-undef */
const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

//Server
app.get('/status', (req, res) => {
    res.send({
        message: "Server is running!"
    })
})

app.listen(process.env.PORT || 8081)

//Database
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

con.connect((err) => {
    if (err) throw err
    console.log('DB Connected!')
})