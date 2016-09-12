var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});

var portDecision = process.env.PORT || 3000;

app.listen( portDecision, function () {
  console.log("port 3000 is listening");
});//end server up

app.get('/', urlencodedParser, function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
  // res.send('meow');
});//end get

//anyone can use the public folder now
app.use(express.static('public'));

//get requested calculation and calculate
