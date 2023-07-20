let mysql = require('mysql')

let connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    database : process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD
})

connection.connect(function(err){
    if(err)
        return console.error('error: ', + err.message)
    console.log('Connected to the Mysql server.')
})