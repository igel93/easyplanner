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
        
            })
    } catch (error) { }
})

// //POST HTTP method to /calendar-event
// router.post('/', (req, res) => {
//     try {
//         var param = req.body;
//         a1 = param.year;
//         a2 = param.month;
//         a3 = param.day;
//         b = param.start_time
//         c = param.ending_time
//         d = param.location
//         e = param.group_name
//         f = param.group_size
//         g = param.describtion
//         h = param.user_id
//         sql = "INSERT INTO event (user_id,year, month, day,start_time,ending_time,location,group_name,group_size,describtion) VALUES (?,?,?,?,?,?,?);"
//         connection.query(sql, [h, a1, a2, a3, b, c, d, e, f, g], function (err, rows, fields) {
//             if (err) throw err
//             console.log('The SQL is: ', sql);
//             res.setHeader("Access-Control-Allow-Origin", "*");
//             res.send(rows);
//         })
//     } catch (error) { }
// })

//POST HTTP method to /calendar-event
router.post('/', (req, res) => {
    try {
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
        h = param.user_id
        sql = "INSERT INTO event (year,month,day,user_id,start_time,ending_time,location,group_name,group_size,describtion) VALUES (?,?,?,?,?,?,?,?,?,?);"
        connection.query(sql, [a1, a2, a3, h, b, c, d, e, f, g], function (err, rows, fields) {
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
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(rows);
        })
    } catch (error) { }
})
module.exports = router;