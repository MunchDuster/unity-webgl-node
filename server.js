var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var cors = require('cors')
app.use(cors())// Set cross-domain
app.use(express.static('client'));// Static file folder
// Listening port number
server.listen(3005, function () {
    console.log('App listening at port 3005;');
});