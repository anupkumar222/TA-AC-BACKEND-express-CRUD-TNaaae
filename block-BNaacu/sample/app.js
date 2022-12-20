var express = require('express');
var studentsRouter = require('./routes/students')
var app = express();


//setup view engine
app.set("view engine", "ejs");
app.set('views', __dirname + '/views')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use('/students', studentsRouter);

//handle error
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})

app.listen(3000, () => {
    console.log('server is listening on port 3k');
});