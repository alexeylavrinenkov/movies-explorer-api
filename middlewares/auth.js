const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { DEFAULT_CONFIG } = require('../utils/config');
const { ERROR_MESSAGES } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError(ERROR_MESSAGES.TOKEN_NOT_TRANSFERED));
  }

  const token = authorization.split(' ')[1];

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : DEFAULT_CONFIG.DEV_SECRET_KEY);
  } catch (err) {
    return next(new UnauthorizedError(ERROR_MESSAGES.INCORRECT_TOKEN));
  }

  req.user = payload;

  return next();
};
