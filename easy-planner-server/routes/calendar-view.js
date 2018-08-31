//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const connection= require('../connection/mysqlConnection');


//connect to mysql
connection.connect;


//GET HTTP method to /login
router.get('/',(req,res,next)=>{
    //param can pass the select infor
    var param = req.query || req.params;
    connection.query('SELECT * FROM user',function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
        connection.end;
      })
});

//POST HTTP method to /login
router.post('/',(req,res,next)=>{
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send('add success:'+ rows);
        connection.end;
      })
});

//PUT HTTP method to /login
router.put('/',(req,res,next)=>{
    //param can pass the select infor
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
        connection.end;
      })
});


//DELETE HTTP method to /calendar-event
router.delete('/',(req,res,next)=>{
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send('delete success'+rows);
        connection.end;
      })
});



module.exports = router