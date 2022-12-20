var express = require('express');

var app = express();


//setup view engine
app.set("view engine", "ejs");
app.set('views', __dirname + '/school/views')

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.use((req, res, next) => {
    res.send('Page Not Found');
})

app.listen(3000, () => {
    console.log('server is listening on port 3k');
});