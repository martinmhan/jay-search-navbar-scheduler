var http = require('http');
var app = require('./app.js');

var server = http.createServer(app);
var PORT = 3000;

server.listen(PORT, (err) => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('connected to port 3000!')
    }
});


