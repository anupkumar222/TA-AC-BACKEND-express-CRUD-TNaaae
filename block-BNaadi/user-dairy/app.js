var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
const exp = require('constants');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

//db connection
mongoose.connect('mongodb://localhost/user-diary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    console.log(err ? err : 'Database is connected');
})

//initiating app
var app = express();

//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('server is listening on port 3k');
})