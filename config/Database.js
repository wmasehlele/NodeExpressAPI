require("dotenv").config()
//const mysql = require("mysql2")
const mssql = require("mssql")

const mssqlConfig = {
    server: process.env.MSDB_HOST,
    user: process.env.MSDB_USERNAME,
    database: process.env.MSDB_NAME,
    password: process.env.MSDB_PASSWORD,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

mssql.on("error", err => {
    console.log(err.message)
})

const pool = mssql.connect(mssqlConfig)

module.exports = mssqlConfig

// async function test(){
//     try {
//         // make sure that any items are correctly URL encoded in the connection string
//         let pool = await mssql.connect(mssqlConfig)
//         const result = await pool.request()
//         .input("id", mssql.Int, 1)
//         .query(`select * from categories where id = @id`)
//         //.query("name of sp") for sp execution
//         console.log(result.recordset[0])
//         mssql.close()
//     } catch (err) {
//         console.dir(err)
//         mssql.close()
//     }
// }
//test()

// let mssqlpool = mssql.connect(mssqlConfig)
// mssqlpool.request().query("select * from categories")
// mssql.close();


// const mysqlpool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     //dialect: process.env.DB_DIALECT
//     // pool: {
//     //     max: 5,
//     //     min: 0,
//     //     acquire: 30000,
//     //     idle: 10000
//     // }
// })
// let sql1 = "select * from categories"
// mysqlpool.execute(sql1 , (error, result) => {
//     if (error) throw error
//     console.log(result);
//     result.forEach( (res) => {
//         console.log( res.description )
//     } )
// })

//module.exports = mysqlpool.promise()