var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
const sequelize = require('./config/sequelize'); // Path to your sequelize configuration

sequelize.sync().then(() => {
  console.log("All models were synchronized successfully.");
}).catch((error) => {
  console.error("Failed to synchronize models:", error);
});


// const { Connection } = require('tedious');

// const config = {
//   server: 'localhost',
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'AAA',
//           password: 'aaa',
//       },
//   },
//   options: {
//       database: 'quantum',
//       encrypt: false, // Use true if connecting to Azure SQL Database
//       port: 1433 // Double-check if your SQL Server listens on a different port
//   }
// };

// const connection = new Connection(config);

// connection.on('connect', err => {
//   if (err) {
//     console.error('Connection failed', err);
//   } else {
//     console.log('Connected successfully');
//   }
// });

// connection.connect();


// sequelize.authenticate();

console.log('-----------------')
// User.create({ name: 'John', email: 'doe@mail.com' })
//   .then(user => {
//     console.log('User created:', user.toJSON());
//   })
//   .catch(error => {
//     console.error('Error creating user:', error);
//   });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
          route: 'error',
        });

});

module.exports = app;
