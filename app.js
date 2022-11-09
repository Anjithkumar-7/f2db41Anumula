var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aeroplaneRouter = require('./routes/aeroplane');
var gridRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var aeroplane = require("./models/aeroplane");
var resourceRouter = require("./routes/resource");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/aeroplane', aeroplaneRouter);
app.use('/gridbuild',gridRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await aeroplane.deleteMany();
 let instance1 = new
aeroplane({aer_class:"First", aer_fare:20000,aer_mem:"1"});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });
 let instance2 = new
aeroplane({aer_class:"Second", aer_fare:30000,aer_mem:"2"});
 instance2.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("Second object saved")
 });
 let instance3 = new
aeroplane({aer_class:"Three", aer_fare:40000,aer_mem:"3"});
 instance3.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("Third object saved")
 });
}
let reseed = true;
if (reseed) { recreateDB();}

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
