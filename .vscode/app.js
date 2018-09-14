var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const loginRouter=require('./routes/login')
const calendarRouter = require('./routes/calendar-view');
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//calendar-evetn
app.use('calendar-view/:user_id',calendarRouter.get);
app.use('calendar-view/',calendarRouter.post);
app.use('calendar-view/:event_id',calendarRouter.put);
app.use('calendar-view/:event_id',calendarRouter.delete);

//login and register
app.use('login/:student_id',loginRouter.get);
app.use('login/',loginRouter.post);
app.use('login/:student_id',loginRouter.put);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



