const NotFoundError = require('../errors/NotFoundError');
const { ERROR_MESSAGES } = require('../utils/constants');

module.exports = (req, res, next) => {
  next(new NotFoundError(ERROR_MESSAGES.PAGE_NOT_FOUND));
};
