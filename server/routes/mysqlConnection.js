const mysql = require('mysql');
// Connect mysql to our database

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'easyplannerdb'
});

module.exports = connection;