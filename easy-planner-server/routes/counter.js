const express = require('express');
const router = express.Router();
const connection = require('../connection/mysqlConnection');

// connection to mysql created
connection.connect();

exports.get = (req,res)=>{
    var param = req.params; 
    console.log(param.id);
    connection.query("SELECT * FROM inClassCounter", function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
        connection.end();
    })
}

exports.post = (req, res) => {
    var param = req.query || req.params;
    connection.query(param, function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
        connection.end();
    })
}