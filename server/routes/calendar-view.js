//Require the express package and use express.Router()
const connection = require('./mysqlConnection');
const express = require('express');
const router = express.Router();

//get HTTP method to /calendar-event 
router.get('/:id', (req, res, next) => {
    try {
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
    } catch (error) { }
})
//get Http method to /calendar-event by event id
router.get('/modify-event/:event_id', (req, res) => {
    try {
        //param can pass the select infor
        sql = "select * from event where event_id =?";
        connection.query(sql, [req.params.event_id], function (err, rows, fields) {
            if (err) throw err
            res.setHeader("Access-Control-Allow-Origin", "*");
            //res.send(rows);
            results = JSON.stringify(rows[0]);
            results = JSON.parse(results);
            res.send(results);
            console.log('The by id solution is: ', results);
        })
    } catch (error) { }
})
//get Http method to /calendar-event by date
router.get('/:id/:year/:month/:day', (req, res, next) => {
    try {
        //param can pass the select infor
        sql = "select * from event where  user_id =? and year=? and month=? and day=?";
        connection.query(sql, [req.params.id, req.params.year, req.params.month, req.params.day],
            function (err, rows, fields) {
                if (err) throw err
                res.setHeader("Access-Control-Allow-Origin", "*");
                //res.send(rows);
                results = JSON.stringify(rows);
                results = JSON.parse(results);
                res.send(results)
                console.log('The solution Of by date is: ', results);
            })
    } catch (error) { }
})

//POST HTTP method to /calendar-event
router.post('/', (req, res) => {
    try {
        var param = req.body;
        b = param.start_time
        c = param.ending_time
        d = param.location
        e = param.group_name
        f = param.group_size
        g = param.describtion
        sql = "INSERT INTO event (start_time,ending_time,location,group_name,group_size,describtion) VALUES (?,?,?,?,?,?);"
        connection.query(sql, [b, c, d, e, f, g], function (err, rows, fields) {
            if (err) throw err
            console.log('The add solution is: ', rows);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(rows);
        })
    } catch (error) { }
})


//PUT HTTP method to /calendar-event
router.put('/', (req, res) => {
    try {
        //param can pass the select infor
        var param = req.body;
        a1 = param.year
        a2 = param.month
        a3 = param.day
        b = param.start_time
        c = param.ending_time
        d = param.location
        e = param.group_name
        f = param.group_size
        g = param.describtion
        event_id = param.event_id
        sql = "UPDATE event SET year=?,month=?,day=?,start_time=?,ending_time=?,location=?,group_name=?,group_size=?,describtion=? WHERE event.event_id =?";
        connection.query(sql, [a1, a2, a3, b, c, d, e, f, g, event_id], function (err, rows, fields) {
            if (err) throw err
            console.log('The modify solution is: ', rows);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(rows);
        })
    } catch (error) { }
})


//DELETE HTTP method to /calendar-event
router.delete('/:id', (req, res) => {
    try {
        //param can pass the select infor
        sql = "DELETE FROM event WHERE event.event_id =?";
        connection.query(sql, [req.params.id], function (err, rows, fields) {
            if (err) throw err
            console.log('The delete solution is: ', rows);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(rows);
        })
    } catch (error) { }
})
module.exports = router;