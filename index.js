
var express = require('express');
var app = express();
var os = require('os')

app.get('/', function (req, res) {
  
  var msg = os.hostname()  
  console.log(msg);

  res.send(msg);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

