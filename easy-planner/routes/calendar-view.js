//Require the express package and use express.Router()
const connection = require('./mysqlConnection');
const express = require('express');
const router = express.Router();

//get HTTP method to /calendar-event 
router.get('/:id',(req,res,next) => {
    
	//param can pass the select infor
    var param =req.query || req.params;
    console.log(param.id);
    connection.query(param, function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
    })
})

//POST HTTP method to /calendar-event
router.post('/',(req,res) => {
	//param can pass the select infor
    var param =req.query || req.params;
    console.log(param);
    
    connection.query(param, function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
    })
})


//PUT HTTP method to /calendar-event
router.put('/:id',(req,res) => {
	//param can pass the select infor
    var param =req.query || req.params;
    console.log(param.id);
    connection.query(param, function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
    })
})


//DELETE HTTP method to /calendar-event
router.delete('/:id',(req,res) => {
	//param can pass the select infor
    var param =req.query || req.params;
    console.log(param.id);
    connection.query(param, function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
    })
})
module.exports= router;