//Require the express package and use express.Router()
const connection = require('./mysqlConnection');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

const saltRounds = 10; 

//get HTTP method to /login
router.get('/:student_id/:password', (req, res) => {
    try {  //param can pass the select infor
        sql = "select * from user where student_id =?";
        connection.query(sql, [req.params.student_id], function (err, rows, fields) {

            // console.log('The solution is: ', rows[0].solution);
            // console.log('The solution is: ', rows);
            res.setHeader("Access-Control-Allow-Origin", "*");
            // res.send(rows[0]);
            results = JSON.stringify(rows[0]);
            results = JSON.parse(results);
            res.send(results)
        })
    } catch (error) { }
})

router.get('/:user_id', (req, res) => {
    try {
        //param can pass the select infor
        console.log(req.params.user_id)
        sql = "select * from user where user_id =?";
        connection.query(sql, [req.params.user_id], function (err, rows, fields) {
            if (err) throw err
            // console.log('The solution is: ', rows[0].solution);
            console.log('The solution is: ', rows);
            res.setHeader("Access-Control-Allow-Origin", "*");
            // res.send(rows[0]);
            results = JSON.stringify(rows[0]);
            results = JSON.parse(results);
            res.send(results)
        })
    } catch (error) { }

})



//post HTTP method to /login
router.post('/', (req, res) => {
    try {//param can pass the select infor
        var param = req.body;
        b = param.student_id
        c = param.name
        e = param.email
        d = param.password
            .catch(err => console.error(err.message));
        sql = "INSERT INTO user (student_id, name, password, email) VALUES (?,?,?,?)"
        connection.query(sql, [b, c, d, e], function (err, rows, fields) {
            if (err) throw err
            res.setHeader("Access-Control-Allow-Origin", "*");
            console.log('The solution is: ', rows);
            res.send(rows);
        })
    } catch (error) { }
})

//put HTTP method to /login
router.put('/:user_id', (req, res) => {
    try {
        //param can pass the select infor
        user_id = req.params.user_id;
        password = req.body.password;
        console.log("pass=" + req.body.params)
        sql = "UPDATE user SET password =? WHERE user.user_id =?";
        connection.query(sql, [password, user_id], function (err, rows, fields) {
            if (err) throw err
            res.setHeader("Access-Control-Allow-Origin", "*")
            console.log('The solution is: ', rows);;
            res.send(rows);
        })
    } catch (error) { }
})

module.exports = router;


