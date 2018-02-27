
var express = require('express');
var app = express();
var os = require('os')
var version = "v4"
const http = require('http');
 

app.get('/', function (req, res) {
  
  var msg = os.hostname()  
  console.log(msg);

  var url = req.param("url", "localhost:3013")

  console.log(url)
  http.get(url, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(data);
    });
 
  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.send(msg + " / " + version +" / ERRO: " +err.message);
  });

  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

