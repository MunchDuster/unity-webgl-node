const PORT = process.env.PORT || 8080;

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors')
app.use(cors())// Set cross-domain
app.use(express.static('client'));// Static file folder
// Listening port number
server.listen(PORT, function () {
    console.log('App listening at port 3005;');
});