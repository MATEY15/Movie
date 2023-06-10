const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const movieRoutes = require('./route/movie-routes')
const cors = require('cors');

const PORT = 3000;
const URL = 'mongodb://0.0.0.0:27017/moviescollection';

const app = express();
// app.use(cors());
app.use(express.json());
app.use(movieRoutes);

mongoose
    .connect(URL)
    .then(() => {
        console.log('Connect MongeDB');
    })
    .catch((err) => console.log(`Db connection error ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
})
