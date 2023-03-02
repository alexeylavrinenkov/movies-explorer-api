const LINK_REGEX = /^https?:\/\/(www\.)?[0-9a-zA-Z]+([.|-]{1}[0-9a-zA-Z]+)*\.[0-9a-zA-Z-]+(\/[0-9a-zA-Z\-._~:/?#[\]@!$&'()*+,;=]*#?)?$/;

const ERROR_MESSAGES = {
  INCORRECT_LOGIN_OR_PASSWORD: 'Вы ввели неправильный логин или пароль.',
  TOKEN_NOT_TRANSFERED: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  INCORRECT_TOKEN: 'При авторизации произошла ошибка. Переданный токен некорректен.',
  USER_ALREADY_EXISTS: 'Пользователь с таким email уже существует.',
  REGISTRATION_ERROR: 'При регистрации пользователя произошла ошибка.',
  USER_NOT_FOUND: 'Пользователь не найден.',
  INCORRECT_USER_ID: 'Некорректный id пользователя.',
  PROFILE_UPDATE_ERROR: 'При обновлении профиля произошла ошибка.',
  MOVIE_NOT_FOUND: 'Фильм не найден.',
  INCORRECT_MOVIE_ID: 'Некорректный id фильма.',
  STRANGER_MOVIE: 'Удаление или изменение чужого фильма.',
  CREATE_MOVIE_ERROR: 'При создании фильма произошла ошибка.',
  INTERNAL_SERVER_ERROR: 'На сервере произошла ошибка.',
  PAGE_NOT_FOUND: 'Страница по указанному маршруту не найдена.',
};

module.exports = {
  LINK_REGEX,
  ERROR_MESSAGES,
};
