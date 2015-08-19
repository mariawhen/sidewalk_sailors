var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    connect = require('connect'),
    methodOverride = require('method-override'); //used to manipulate POST

// routes
var routes = require('./routes/index');
// http://blog.robertonodi.me/simple-image-upload-with-express/
// db stuff
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();
var router = express.Router();

var mongoURI = 'mongodb://localhost/sidewalksailors';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.MONGOLAB_URI;
}

mongoose.connect(mongoURI);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// auth middleware
app.use(require('express-session')({
  secret: 'jeong sings',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

// passport config
var Pirate = require('./models/Pirate');
passport.use(new LocalStrategy(Pirate.authenticate()));
passport.serializeUser(Pirate.serializeUser());
passport.deserializeUser(Pirate.deserializeUser());
app.locals.title = 'Sidewalk Sailors';

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//start server
// app.listen();
console.log('3000 is where the magic happens!');

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
