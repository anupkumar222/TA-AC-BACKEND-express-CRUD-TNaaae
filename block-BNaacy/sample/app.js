var express = require('express');
var path = require('path');
var userRouter = require('./routes/users')
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/sample",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err) => {
    console.log(err ? "connected false" : "connected true");
});

var app = express();

//midlleware
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

//routes
// app.use('/', (req, res) => {
//     res.render('index.ejs');
// });

app.use('/users', userRouter);

//error handler
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
    console.log('server is listening on port 3k');
});