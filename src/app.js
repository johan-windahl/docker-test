'use strict';

var express = require('express');

var HOST = '0.0.0.0';
var PORT = 3888;

if (process.env.PORT !== '') {
  PORT = process.env.PORT;
}  

if (process.env.HOST !== '') {
  HOST = process.env.HOST;
} 
// App
var app = express();
app.get('/alphadev-rocks', (req, res) => {
  res.send(this.doesAlphaDevRock());
});

exports.doesAlphaDevRock = function () {
    return true;
}
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); 