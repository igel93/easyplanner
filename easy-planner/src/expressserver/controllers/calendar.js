//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const connection= require('../connection/mysqlConnection');
//const sqlQ=require('../connection/sql')
//const calendar = require('../models/List');

//connect to mysql
connection.connect;

//GET HTTP method to /login
router.get('/',(req,res)=>{
    //param can pass the select infor
    var param = req.query || req.params;
    connection.query('select * from role',function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send(rows);
        connection.end;
      })
});

//POST HTTP method to /login
router.post('/',(req,res)=>{
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send('add success:'+ rows);
        connection.end;
      })
});

//DELETE HTTP method to /calendar-event
router.delete('/',(req,res)=>{
    var param = req.query || req.params;
    connection.query(param,function (err,rows,fields) {
        if (err) throw err
        console.log('The solution is: ', rows[0].solution);
        console.log('The solution is: ', rows);
        res.send('delete success'+rows);
        connection.end;
      })
});

//GET HTTP method to /calendar 查
// router.get('/',(req,res) => {
// 	calendar.getAllLists((err, lists)=> {
// 		if(err) {
// 			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
// 		}
// 		else {
// 			res.write(JSON.stringify({success: true, lists:lists},null,2));
// 			res.end();	
			
// 	}	
// 	});
// });




//POST HTTP method to /calendar 增改

// router.post('/', (req,res,next) => {
// 	console.log(req.body);
// 	let newList = new calendar({
// 		title: req.body.title,
// 		description: req.body.description,
// 		category: req.body.category
// 	});
// 	calendar.addList(newList,(err, list) => {
// 		if(err) {
// 			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

// 		}
// 		else 
// 			res.json({success:true, message: "Added successfully."});
	
// 	});
// });


//DELETE HTTP method to /calendar. Here, we pass in a params which is the object id. 删
// router.delete('/:id', (req,res,next)=> {
// 	let id = req.params.id;
// 	console.log(id);
// 	calendar.deleteListById(id,(err,list) => {
// 		if(err) {
// 			res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
// 		}
// 		else if(list) {
// 			res.json({success:true, message: "Deleted successfully"});
// 		}
// 		else
// 			res.json({success:false});
// 	})
// });

module.exports = router;