//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const connection= require('../connection/mysqlConnection');


//connect to mysql
connection.connect();

exports.get = (req,res)=>{
    //param can pass the select infor
    var param = req.params;
    console.log(param.id);
    connection.query('SELECT * FROM user',function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
        connection.end();
      })
}

// //GET HTTP method to /login
// router.get('/',(req,res)=>{
//     //param can pass the select infor
//     var param = req.query || req.params;
//     connection.query('SELECT * FROM user',function (err,rows,fields) {
//         if (err) throw err
//         console.log('The solution is: ', rows[0].solution);
//         console.log('The solution is: ', rows);
//         res.send(rows);
//         connection.end();
//       })
// });

//POST HTTP method to /login
exports.post = (req,res)=>{
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send('add success:'+ rows);
        connection.end();
      })
}

//PUT HTTP method to /login
exports.put= (req,res)=>{
    //param can pass the select infor
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
        connection.end();
      })
}


//DELETE HTTP method to /calendar-event
exports.delete=(req,res)=>{
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send('delete success'+rows);
        connection.end();
      })
}

