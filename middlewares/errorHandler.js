const { ERROR_MESSAGES } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { status = 500, message = ERROR_MESSAGES.INTERNAL_SERVER_ERROR } = err;

  res.status(status).send({ message });

  next();
};
