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
            // console.log('The by id solution is: ', results);
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
            // console.log('The by id solution is: ', results);
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
                // console.log('The solution Of by date is: ', results);
            })
    } catch (error) { }
})

//POST HTTP method to /calendar-event
router.post('/', (req, res) => {
    try {
        var param = req.body
        var year = param.year
        var month = param.month
        var day = param.day
        var start_time = param.start_time
        var ending_time = param.ending_time
        var location = param.location
        var group_name = param.group_name
        var group_size = param.group_size
        var describtion = param.describtion
        var user_id = param.user_id
        sql = "INSERT INTO event (year,month,day,start_time,ending_time,location,group_name,group_size,describtion, user_id) VALUES (?,?,?,?,?,?,?,?,?,?);"
        connection.query(sql, [year, month, day, start_time, ending_time, location, group_name, group_size, describtion, user_id,], function (err, rows, fields) {
            if (err) throw err
            
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(rows);
        })
    } catch (error) { 
         console.log(error)
        return res.status(500).send("Fill inn all fields to store the event")
    }
})


//PUT HTTP method to /calendar-event
router.put('/', (req, res) => {
    try {
        //param can pass the select infor
        var param = req.body
        var year = param.year
        var month = param.month
        var day = param.day
        var start_time = param.start_time
        var ending_time = param.ending_time
        var location = param.location
        var group_name = param.group_name
        var group_size = param.group_size
        var description = param.describtion
        var user_id = param.user_id
        var event_id = param.event_id
        sql = "UPDATE event SET year=?, month=?, day=?, start_time=?, ending_time=?, location=?, group_name=?, group_size=?, describtion=?, user_id=? WHERE event_id =?";
        connection.query(sql, [year, month, day, start_time, ending_time, location, group_name, group_size, description, user_id, event_id], function (err, rows, fields) {
            if (err) throw err
            // console.log('The modify solution is: ', rows);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(rows);
        })
    } catch (error) {
        return res.status(500).send(error.toString());
     }
})


//DELETE HTTP method to /calendar-event
router.delete('/:id', (req, res) => {
    try {
        //param can pass the select infor
        sql = "DELETE FROM event WHERE event_id =?";
        connection.query(sql, [req.params.id], function (err, rows, fields) {
            if (err) throw err
            // console.log('The delete solution is: ', rows);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(rows);
        })
    } catch (error) { }
})
module.exports = router;