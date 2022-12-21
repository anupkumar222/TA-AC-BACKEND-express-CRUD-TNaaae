var express = require('express');
var mongoose = require('mongoose');
var app = express();

//midlleware
app.set('view engine', "ejs");
app.set('views', __dirname + '/views');

//routes
app.use('/', (req, res) => {
    res.send('Welcome');
});

//error handler
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
    console.log('server is listening on port 3k');
});

