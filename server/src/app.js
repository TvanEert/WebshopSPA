/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const dbService = require('./dbConnection')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.listen(process.env.PORT || 8081, () => console.log("Server is running!"))