// server dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// schemas

// express instance
var app = express();

// port / database settings
var PORT = process.env.PORT || 3000;
var uristring =
  process.env.MONGODB_URI ||
  'mongodb://localhost/nytreactDB';

// logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('public'));

// connect to db
mongoose.connect(uristring);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// listener
app.listen(PORT, function () {
  console.log('Listening on PORT: ' + PORT);
})
;