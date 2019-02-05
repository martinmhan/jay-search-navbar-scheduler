var http = require('http');
var app = require('./app.js');

var server = http.createServer(app);
var PORT = 9004;

server.listen(PORT, (err) => {
	if (err) { console.error(err); }
	else { console.log('Listening on PORT: ', PORT); }
});
