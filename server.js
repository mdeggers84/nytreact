// server dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// schemas
var Article = require('./models/Article');

// express instance
var app = express();

// port / database settings
var PORT = process.env.PORT || 3000;
var uristring =
  process.env.MONGODB_URI ||
  'mongodb://localhost/nytreact';

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

// routes
app.get('/api/saved', function (req, res) {
  Article.find({}).sort([
    ['date', 'descending']
  ]).limit(5).exec(function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

app.post('/api/saved', function (req, res) {
  console.log('BODY: ', req.body.article.title, req.body.article.url);

  Article.create({
    title: req.body.article.title,
    url: req.body.article.url
  }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send('Saved Article');
    }
  });
});

app.delete('/api/delete', function () {

});

app.get('*', function () {

});

// listener
app.listen(PORT, function () {
  console.log('Listening on PORT: ' + PORT);
});
