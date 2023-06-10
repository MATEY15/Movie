const express = require('express');
const router = express.Router();
const {
    getMovies,
    getMovie,
    deleteMovie,
    postMovie,
    updateMovie
} = require('../controllers/movie-controller')

router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.delete('/movies/:id', deleteMovie);
router.post('/movies', postMovie);
router.patch('/movies/:id', updateMovie);

module.exports = router;
