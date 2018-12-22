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



// const express = require('express');
// const path = require('path');
// const parser = require('body-parser');
// const router = require('./router.js');

// const app = express();
// const PORT = 3000;

// app.use(parser.json());
// app.use(parser.urlencoded({
//     extended: true
// }));
// app.use('/', router);
// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.listen(PORT, (err) => {
//     if (err) { console.log('error connecting to server') }
//     else { console.log("connected to PORT:", PORT) }
// });