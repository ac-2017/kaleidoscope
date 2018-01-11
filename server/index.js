var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var session = require('express-session')
//require('layout-grid/dist/css/layout-grid.min.css')
var app = express();

app.use(session({
  secret: 'thisisasecretcode',
  cookie: {
    secure:true
  }
}))
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.get('/*', function(req, res, next) {
  var week = 604800000
  res.session.cookie.maxAge = week
  next()
})



app.get('/weather', function(req, res) {
  
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});