var createError = require('http-errors');
var path = require('path');

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
let flash = require('connect-flash')
let passportConfig = require('./config/passport')
let passport = require('passport');

let mongoose = require('mongoose');


//db mongo setup
let db = require('./config/db')

//passportConfig
let passport2 = passportConfig()

//console.log(db.connection.uri)
mongoose.connect(db.connection.uri, (err, res) => {
  if (err) console.error(err)
  if (res) console.log('🍁 connected to Atlas ❤️')
})


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { Console } = require('console');

var app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'sessionSecret'
}))

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './views')));
//app.use(express.static(path.join(__dirname, './node_modules')));
//app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// Sets up passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//define variables to be used within ejs
app.use(function (req, res, next) {
  res.locals.user = req.user;
  res.locals.login = req.isAuthenticated();
  next();
});

//definicion de rutas
app.use('/', indexRouter);


app.use('/users', usersRouter);

// catch 404 an forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;