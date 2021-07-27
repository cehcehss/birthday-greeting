'use strict';
const DATABASE = process.env.DB;
var db = {};

if(DATABASE == 'mysql'){
  const mysql = require('mysql2')
  const connection = mysql.createConnection({
    host     :   process.env.HOST,
    user     :   process.env.USERNAME,
    password :   process.env.PASSWORD,
    database :   process.env.DBNAME,
    port: process.env.MYSQL_PORT
  });

  db.connection = connection;
}

if(DATABASE == 'firestore'){

}

module.exports = db;