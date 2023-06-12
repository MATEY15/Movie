const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    cast: [String],
    genres: [String],
    rating: Number,
    duration: {
        hours: Number,
        minutes:  Number
    },
    poster: String,
    trailer: String,
    description: String,
    reviews: [
        {
            name: String,
            text: String
        }
    ]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
