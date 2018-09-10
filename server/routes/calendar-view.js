//Require the express package and use express.Router()
const connection = require('./mysqlConnection');
const express = require('express');
const router = express.Router();

//get HTTP method to /calendar-event 
router.get('/:id', (req, res, next) => {
    //param can pass the select infor
    sql = "select * from event where user_id =?";
    connection.query(sql, [req.params.id], function (err, rows, fields) {
        if (err) throw err
        res.setHeader("Access-Control-Allow-Origin", "*");
        //res.send(rows);
        results = JSON.stringify(rows);
        results = JSON.parse(results);
        res.send(results);
        console.log('The by id solution is: ', results);
    })
})

//get Http method to /calendar-event by date
router.get('/:id/:year/:month/:day', (req, res, next) => {
    //param can pass the select infor
    sql = "select * from event where  user_id =? and year=? and month=? and day=?";
    connection.query(sql, [req.params.id, req.params.year, req.params.month, req.params.day], function (err, rows, fields) {
        if (err) throw err
        res.setHeader("Access-Control-Allow-Origin", "*");
        //res.send(rows);
        results = JSON.stringify(rows);
        results = JSON.parse(results);
        res.send(results)
        console.log('The solution Of by date is: ', results);
    })
})

//POST HTTP method to /calendar-event
router.post('/', (req, res) => {
    var param = req.body;
    a = param.date
    b = param.start_time
    c = param.ending_time
    d = param.location
    e = param.group_name
    f = param.group_size
    g = param.describtion
    h = param.user_id
    sql = "INSERT INTO event (date,start_time,ending_time,location,group_name,group_size,describtion,user_id) VALUES (?,?,?,?,?,?,?,?);"
    connection.query(sql, [a, b, c, d, e, f, g, h], function (err, rows, fields) {
        if (err) throw err
        console.log('The add solution is: ', rows);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send('insert success!');
    })
})


//PUT HTTP method to /calendar-event
router.put('/', (req, res) => {
    //param can pass the select infor
    var param = req.body;
    a = param.date
    b = param.start_time
    c = param.ending_time
    d = param.location
    e = param.group_name
    f = param.group_size
    g = param.describtion
    event_id = param.event_id
    sql = "UPDATE event SET date=?,start_time=?,ending_time=?,location=?,group_name=?,group_size=?,describtion=? WHERE event.event_id =?";
    connection.query(sql, [a, b, c, d, e, f, g, event_id], function (err, rows, fields) {
        if (err) throw err
        console.log('The modify solution is: ', rows);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send('update success!');
    })
})


//DELETE HTTP method to /calendar-event
router.delete('/:id', (req, res) => {
    //param can pass the select infor
    sql = "DELETE FROM event WHERE event.event_id =?";
    connection.query(sql, [req.params.id], function (err, rows, fields) {
        if (err) throw err
        console.log('The delete solution is: ', rows);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send("delete success!");
    })
})
module.exports = router;