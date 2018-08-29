const express = require('express');
const router = express.Router();
const db = require('../db');
var selectsql = 'select * from role';
var result = '';
/* GET api listing. */
router.get('/', (req, res) => {
    //   res.send('api works');
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    db.conn().query(selectsql, function (err, rows) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i in rows) {

            /*   console.log(rows);
               var temp=rows[i].id;
               console.log(temp);*/
        }
        result = JSON.stringify(rows);//JSON String format
        console.log(result);
        res.end(result);

    });
});

module.exports = router;






// const express = require('express');
// const router = express.Router();

// // declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';

// /* GET api listing. */
// router.get('/', (req, res) => {
//     res.send('api works');
// });

// // Get all posts
// router.get('/posts', (req, res) => {
//     // Get posts from the mock api
//     // This should ideally be replaced with a service that connects to MongoDB
//     axios.get(`${API}/posts`)
//         .then(posts => {
//             res.status(200).json(posts.data);
//         })
//         .catch(error => {
//             res.status(500).send(error)
//         });
// });

// var mysql = require('mysql')

// // Database connetction

//     var connection = mysql.createConnection({
//         host: 'localhost:8888',
//         user: 'root',
//         password: 'root',
//         port: 8888,
//         database: 'easyplannerdb'
//     });

//     connection.connect();

//     connection.query('SELECT * from role', function (error, results, fields) {
//         if (error) throw error; 
//         console.log('The usergroups is: ', results[0].role_id);
//     });


// // router.get('/', function(req, res, next) {
// //     res.locals.connection.query('SELECT * from role', function (error, results, fields) {
// //         if (error) throw error;
// //         res.send(JSON.stringify({"status": 200, "error": null, response: results }));
// //     });
// // });

// module.exports = router;