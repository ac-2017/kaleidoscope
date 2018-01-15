var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios')
var session = require('express-session')
var keys = require('./config.js')

var app = express();

app.use(session({
  secret: 'thisisasecretcode',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure:false, // set true for https
    maxAge: 60000
  }
}))

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/*', function(req, res, next) {
  var week = 604800000
  // console.log(req.session.testing)
  req.session.cookie.maxAge = week

  if (req.session.views) {
    req.session.views++ 
  } else {
    req.session.views = 1
  }
  // console.log('expires in' , req.session.cookie.maxAge / 1000)
  // console.log(req.session.views)
  next()
})

app.get('/weather', function(req, res) {
  axios.get('http://api.wunderground.com/api/' + keys.weatherKey +'/conditions/q/10038.json')
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => {
    console.log(err)
    res.send({})
  })
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
    res.send([])
  })
  // res.end()
})

app.get('/calendar', function(req, res) {
  // console.log(req)
  var token = req.query.token
  var startTime = new Date(Date.now()).toISOString()
  var endTime = new Date(new Date().getTime() + 60 * 60 * 24 * 1000).toISOString()
  axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=' + token, {params: {timeMin: startTime, timeMax: endTime}})
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.send({})
    })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});