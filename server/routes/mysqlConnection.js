const mysql = require('mysql');
// Connect mysql to our database

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'easyplannerdb.cxoi8rzemvxy.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: process.env.MYSQL_PASSWORD || 'wewillfigureitout',
  port: 3306,
  database: 'easyplannerdb',
});

module.exports = connection;