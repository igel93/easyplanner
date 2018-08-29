// We’ll declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const calendar = require('./controllers/calendar');


// const mysql = require('mysql');
// // Connect mysql to our database
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     port : 3006,
//     database: 'easyplannerdb'
//   });
  
//   connection.connect();

//Declaring Port
const port = 3000;

//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) => {
    res.send("Invalid page");
})

//Routing all HTTP requests to /calendar-view to calendar controller
app.use('/login',calendar);
//Listen to port 3000

app.listen(port, () => {
	console.log(`Starting the server at port ${port}`);
});