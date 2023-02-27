const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { createMovieValidator, movieIdValidator } = require('../middlewares/validator');

router.get('/', getMovies);
router.post('/', createMovieValidator, createMovie);
router.delete('/:movieId', movieIdValidator, deleteMovie);

module.exports = router;
