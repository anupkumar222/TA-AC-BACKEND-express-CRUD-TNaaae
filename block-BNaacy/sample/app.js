var express = require('express');
var app = express();

app.use('/', (req, res) => {
    res.send('welcome');
})

app.use((req, res, next) => {
    res.send(err);
})

app.listen(3000, (req, res) => {
    console.log('server is listening on port 3k');
})