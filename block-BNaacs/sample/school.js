var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/sample', 
    (err) => {
        console.log(err ? err : "connected true");
    }
)

var app = express();

app.use = express.json();

//setup view engine
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use((req, res, next) => {
    res.send('Page Not Found');
})