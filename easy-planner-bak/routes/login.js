//Require the express package and use express.Router()
const connection = require('./mysqlConnection');
const express = require('express');
const router = express.Router();

//get HTTP method to /login
router.get('/:student_id/:password',(req,res) => {
    //param can pass the select infor
    sql="select * from user where student_id =? and password =?";
    connection.query(sql,[req.params.student_id,req.params.password],function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
    })
})

//post HTTP method to /login
router.post('/',(req,res) => {
	//param can pass the select infor
    var param =req.body;
    b=param.student_id
    c=param.name
    d=param.password
    e=param.email
    f=param.role_id
    sql="INSERT INTO user (student_id, name, password, email, role_role_id) VALUES (?,?,?,?,?)"
    connection.query(sql,[b,c,d,e,f], function (err, rows, fields) {
        if (err) throw err
        res.send('insert success!');
    })
})

//put HTTP method to /login
router.put('/:student_id',(req,res) => {
	//param can pass the select infor
    student_id=req.params.student_id;
    password=req.body.password;
    sql="UPDATE user SET password =? WHERE user.student_id =?";
    connection.query(sql,[password,student_id], function (err, rows, fields) {
        if (err) throw err
        res.send('update success');
    })
})

module.exports=router;


