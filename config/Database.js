require("dotenv").config()
const mysql = require("mysql2")

const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD

})

// let sql = "select * from categories"
// pool.execute(sql , (error, result) => {
//     if (error) throw error
//     console.log(result);
//     result.forEach( (res) => {
//         console.log( res.description )
//     } )
// })

module.exports = pool.promise()