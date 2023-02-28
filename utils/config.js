const { NODE_ENV, PORT, DB_URL } = process.env;

const DEFAULT_CONFIG = {
  PORT: NODE_ENV === 'production' ? PORT : 3000,
  DB_URL: NODE_ENV === 'production' ? DB_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb',
  DEV_SECRET_KEY: 'dev-secret-key',
  ALLOWED_CORS: [
    'https://movies-explorer.service.nomoredomains.work',
    'https://api.movies-explorer.site.nomoredomains.work',
    'http://movies-explorer.service.nomoredomains.work',
    'http://api.movies-explorer.site.nomoredomains.work',
    'localhost:3000',
  ],
  ALLOWED_METHODS: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

module.exports = {
  DEFAULT_CONFIG,
};
