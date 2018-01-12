var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios')
var session = require('express-session')
var keys = require('./config.js')

var app = express();

app.use(session({
  secret: 'thisisasecretcode',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure:true
  }
}))

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/*', function(req, res, next) {
  var week = 604800000
  req.session.cookie.maxAge = week
  next()
})

app.get('/weather', function(req, res) {
  
})

app.get('/news', function(req, res) {
  axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      apiKey: keys.newsKey,
      country: 'us'
    }
  }).then((response) => {
    // console.log(response.data.articles)
    res.send(response.data.articles)
  }).catch((err) => {
    console.log(err)
  })
  // res.end()
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});