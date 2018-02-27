
var express = require('express');
var app = express();
var os = require('os')
var version = "v2"

app.get('/', function (req, res) {
  
  var msg = os.hostname()  
  console.log(msg);

  res.send(msg + " / " + version);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

