const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const ForbiddenError = require('../errors/ForbiddenError');
const Movie = require('../models/movie');
const { ERROR_MESSAGES } = require('../utils/constants');

const getMovies = (req, res, next) => {
  Movie.find({})
    .populate('owner')
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      next(err);
    });
};

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => movie.populate('owner'))
    .then((movie) => {
      res.send(movie);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidationError(ERROR_MESSAGES.PROFILE_UPDATE_ERROR));
      }

      return next(err);
    });
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(ERROR_MESSAGES.MOVIE_NOT_FOUND);
      }

      if (movie.owner.toString !== req.user._id) {
        throw new ForbiddenError(ERROR_MESSAGES.STRANGER_MOVIE);
      }

      return Movie.findByIdAndRemove(movieId);
    })
    .populate('owner')
    .then((myMovie) => {
      res.send(myMovie);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError(ERROR_MESSAGES.INCORRECT_MOVIE_ID));
      }

      return next(err);
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
