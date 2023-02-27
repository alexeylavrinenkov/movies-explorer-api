const { celebrate, Joi } = require('celebrate');

const loginValidator = celebrate({
  body: Joi.object.keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const createUserValidator = celebrate({
  body: Joi.object.keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const updateMeValidator = celebrate({
  body: Joi.object.keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const createMovieValidator = celebrate({
  body: Joi.object.keys({
    country: Joi.string().required(),
    director: Joi.string().required().email(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().link(),
    trailerLink: Joi.string().required().link(),
    thumbnail: Joi.string().required().link(),
    movieId: Joi.string().hex().length(24),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const movieIdValidator = celebrate({
  params: Joi.object.keys({
    movieId: Joi.string().hex().length(24),
  }),
});

module.exports = {
  loginValidator,
  createUserValidator,
  updateMeValidator,
  createMovieValidator,
  movieIdValidator,
};
