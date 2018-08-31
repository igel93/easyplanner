const mysql = require('mysql');
// Connect mysql to our database
var connection = mysql.createConnection({
    host     : 'localhost:3306',
    user     : 'root',
    password : 'root',
    database: 'easyplannerdb'
  });
  
 module.exports = connection;