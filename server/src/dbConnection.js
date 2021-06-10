const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.password,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

con.connect((err) =>{
    if(err) console.log(err.message)
    console.log('db ' + con.state)
})