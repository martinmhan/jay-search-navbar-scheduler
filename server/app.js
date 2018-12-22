const express = require('express');
const app = express();
const router = require('./router.js')
const parser = require('body-parser');
const path = require('path');


app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use('/api/', router);
app.use(express.static(path.join(__dirname, '../client/dist')));


module.exports = app;