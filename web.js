#!/usr/bin/env node
var express = require('express');
var fs = require('fs');
var fileContent = fs.readFileSync('index.html','ascii');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fileContent);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
