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

router.get('/:user_id', (req, res) => {
    try { //param can pass the select infor
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
router.post('/', async (req, res) => {
    try {//param can pass the select infor
        var param = req.body;
        b = param.student_id
        c = param.name
        d = await bcrypt.hash(param.password, 5)
        if (!await bcrypt.compare(param.password, d))
            console.log('asdoasdoasdkoasdk')
        console.log('register', param.password, d)
        e = param.email
        rows = await queryPromise("INSERT INTO user (student_id, name, password, email) VALUES (?,?,?,?)", [b, c, d, e])
        res.setHeader("Access-Control-Allow-Origin", "*");
        console.log('The solution is: ', rows);
        res.send(rows);
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY')
            return res.status(400).send('An account with that user id already exists.')
        console.log(error)
        return res.status(500).send('internal error')
    }
})

//put HTTP method to /login
router.put('/:user_id', (req, res) => {
    try {
        //param can pass the select infor
        user_id = req.params.user_id;
        password = req.body.password;
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


