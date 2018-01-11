var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
//require('layout-grid/dist/css/layout-grid.min.css')
var app = express();

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});