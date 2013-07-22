var fs = require('fs');

var express = require('express');

var app = express();

var buffer = new Buffer(fs.readFileSync('index.html'));

var text = buffer.toString();

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
