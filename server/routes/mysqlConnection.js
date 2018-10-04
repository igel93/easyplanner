const mysql = require('mysql');
// Connect mysql to our database
var connection = mysql.createConnection({
  host: 'easyplannerdb.cxoi8rzemvxy.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: '12345678',
  port: 3306,
  database: 'easyplannerdb'
});

module.exports = connection;