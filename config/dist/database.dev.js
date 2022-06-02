"use strict";

require("dotenv").config();

var mysql = require("mysql2");

var mssql = require("mssql");

var mysqlpool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD //dialect: process.env.DB_DIALECT
  // pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  // }

}); // let sql1 = "select * from categories"
// mysqlpool.execute(sql1 , (error, result) => {
//     if (error) throw error
//     console.log(result);
//     result.forEach( (res) => {
//         console.log( res.description )
//     } )
// })

var mssqlConfig = {
  server: process.env.MSDB_HOST,
  user: process.env.MSDB_USERNAME,
  database: process.env.MSDB_NAME,
  password: process.env.MSDB_PASSWORD // pool: {
  //     max: 10,
  //     min: 0,
  //     idleTimeoutMillis: 30000
  // },
  // options: {
  //     encrypt: true, // for azure
  //     trustServerCertificate: false // change to true for local dev / self-signed certs
  // }

};
mssql.on("error", function (err) {
  console.log(err.message);
});

function test() {
  var pool, result;
  return regeneratorRuntime.async(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mssql.connect(mssqlConfig));

        case 3:
          pool = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(pool.request().query("select * from categories"));

        case 6:
          result = _context.sent;
          console.log(result);
          mssql.close();
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.dir(_context.t0);
          mssql.close();

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

test(); // let mssqlpool = mssql.connect(mssqlConfig)
// mssqlpool.request().query("select * from categories")
// mssql.close();
//module.exports = mysqlpool.promise()