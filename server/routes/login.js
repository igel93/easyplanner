//Require the express package and use express.Router()
const connection = require('./mysqlConnection');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

function queryPromise(sql, params) {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, function (err, rows, fields) {
            if (err)
                return reject(err);
            resolve(rows);
        });
    });
}

//get HTTP method to /login
router.post('/verify', async (req, res) => {
    try {
        rows = await queryPromise("select * from user where student_id = ?", [req.body.userName]);

        res.setHeader("Access-Control-Allow-Origin", "*");
        if (rows.length < 1 || !await bcrypt.compare(req.body.password, rows[0].password))
            return res.status(401).send("Wrong password or username");
        
        res.send(rows[0]);
    } catch (error) {
        res.status(500).send(error.toString());
    }
})

router.get('/:user_id', async (req, res) => {
    try { //param can pass the select infor
        // console.log(req.params.user_id)
        rows = await queryPromise("select * from user where user_id =?", [req.params.user_id]);

        res.setHeader("Access-Control-Allow-Origin", "*");
        if (rows.length < 1)
            return res.status(401).send("Could not get user");
            // console.log('The solution is: ', rows[0].solution);
            // console.log('The solution is: ', rows);
            // res.send(rows[0]);
            results = JSON.stringify(rows[0]);
            results = JSON.parse(results);
            res.send(results)
    } catch (error) {
        res.status(500).send(error.toString());
     }
})

//post HTTP method to /login
router.post('/', async (req, res) => {
    try {//param can pass the select infor
        var param = req.body
        var userStudentId = param.student_id
        var userName = param.name
        var userPassword = await bcrypt.hash(param.password, 5)
        if (!await bcrypt.compare(param.password, userPassword))
            // console.log('asdoasdoasdkoasdk')
         console.log('register', param.password, d)
        userEmail = param.email
        rows = await queryPromise("INSERT INTO user (student_id, name, password, email) VALUES (?,?,?,?)", [userStudentId, userName, userPassword, userEmail]);
        res.setHeader("Access-Control-Allow-Origin", "*");
        // console.log('The solution is: ', rows);
        res.send(rows);
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY')
            return res.status(400).send('An account with that user id already exists.')
            console.log(error)
        return res.status(500).send('internal error')
    }
})

//put HTTP method to /login
router.put('/:user_id', async (req, res) => {
    try {
    var user_id = req.params.user_id;
    var oldpassword = req.body.oldpassword;
    var newpassword = await bcrypt.hash(req.body.newpassword, 5);
   
    console.log('userid: ', user_id);
    console.log('oldpass: ', oldpassword);
    console.log('newpass: ', newpassword);

    res.setHeader("Access-Control-Allow-Origin", "*");

    rows2 = await queryPromise("SELECT * FROM user WHERE user_id = ?", [user_id]);
    console.log(rows2);
    if (!await bcrypt.compare(oldpassword, rows2[0].password))
        return res.status(401).send("Wrong password try again ");
    else {
            rows = await queryPromise("UPDATE user SET password=? WHERE user_id=?", [newpassword, user_id]);
            if (rows.length < 0) {
                return res.status(401).send("Could not update your password");
            } else {
                res.send(rows);
            }  
        } 
             
    } catch (error) { 
        console.log(error)
        return res.status(500).send('internal error')
        }
})

module.exports = router;
