const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const User = require('../models/user');
const { ERROR_MESSAGES, DEV_SECRET_KEY } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

const createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => {
      if (!user) {
        throw new NotFoundError();
      }

      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        return next(new ConflictError(ERROR_MESSAGES.USER_ALREADY_EXISTS));
      }

      if (err.name === 'ValidationError') {
        return next(new ValidationError(ERROR_MESSAGES.REGISTRATION_ERROR));
      }

      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(ERROR_MESSAGES.INCORRECT_LOGIN_OR_PASSWORD);
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError(ERROR_MESSAGES.INCORRECT_LOGIN_OR_PASSWORD);
          }

          const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : DEV_SECRET_KEY, { expiresIn: '7d' });

          res.send({ token });
        });
    })
    .catch((err) => {
      next(err);
    });
};

const getMe = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND);
      }

      return res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError(ERROR_MESSAGES.INCORRECT_USER_ID));
      }

      return next(err);
    });
};

const updateMe = (req, res, next) => {
  const { name, email } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND);
      }

      return res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidationError(ERROR_MESSAGES.PROFILE_UPDATE_ERROR));
      }

      return next(err);
    });
};

module.exports = {
  createUser,
  login,
  getMe,
  updateMe,
};
