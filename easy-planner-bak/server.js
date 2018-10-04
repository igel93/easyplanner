const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const calendarRouter = require('./routes/calendar-view');
const loginRouter = require('./routes/login');
const connection = require('./routes/mysqlConnection');

app.use(express.static(__dirname + '/public'));
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// for parsing application/json
app.use(bodyParser.json());
app.use(cors());
connection.connect();

app.get('/', (req, res) => {
    res.send("Invalid page");
})

//calendar-event
app.use('/calender-view', calendarRouter);
//login and register
app.use('/login', loginRouter);

