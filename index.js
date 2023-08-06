const express = require('express');

const port = 8020;

const app = express();

const path = require('path');

const db = require('./config/mongoose');

const Movie = require('./models/movie');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

app.use(express.static('assets'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', require('./routes/movieroutes'))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is Running On', port);
})