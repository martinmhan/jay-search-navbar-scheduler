const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/src/index.jsx')));

app.listen(PORT, (err) => {
    if (err) { console.log('error connecting to server') }
    else { console.log("connected to PORT:", PORT) }
});

