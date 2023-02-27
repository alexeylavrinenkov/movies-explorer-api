# 🎞️ Movies Explorer (бэкенд)
**Movies Explorer** — это веб-сервис, с помощью которого пользователи могут искать и добавлять в избранное интересные им фильмы. Это дипломный проект Яндекс.Практикума по специальности "Веб-разработчик".

![Сервис Movies Explorer](https://user-images.githubusercontent.com/100028583/220186543-8d8f2041-47a3-4f82-adc0-31066b84f7ed.png)

## Ссылки
* API-сервер: https://movies-explorer-api.onrender.com

## Функционал
* Авторизация и регистрация пользователей
* Редактирование своего профиля
* Поиск фильмов
* Добавление фильмов в избранное
* Сортировка фильмов по длительности

## Технологии
* Node.js
* Express.js
* Mongoose
* MongoDB
* Bcrypt
* Celebrate
* Helmet
* ESLint

## Архитектура
<img alt="app-architecture" src="https://user-images.githubusercontent.com/100028583/215335139-42a77150-697a-4d59-98e4-bbd1da0d3126.png">

## Что можно доработать?
* Очистка пользовательского ввода с помощью пакета ```XSS-Clean```
* Удаление запрещенных символов ```$``` и ```.``` из ```req.body```, ```req.query``` и ```req.params``` с помощью пакета ```Express Mongo Sanitize```
* Защита от обхода проверок ввода и DoS-атак с помощью ошибки ```Uncaught TypeError``` в асинхронном коде, приводящей к сбою сервера. Воспользоваться пакетом ```HPP```

## Другие учебные проекты из Яндекс Практикума
1. [Научиться учиться](https://github.com/alexeylavrinenkov/how-to-learn)
2. [Путешествие по России](https://github.com/alexeylavrinenkov/russian-travel)
3. [Mesto (чистый JavaScript)](https://github.com/alexeylavrinenkov/mesto)
4. [Mesto (React)](https://github.com/alexeylavrinenkov/mesto-react)
5. [Mesto (React, авторизация)](https://github.com/alexeylavrinenkov/react-mesto-auth)
6. [Mesto (серверная часть)](https://github.com/alexeylavrinenkov/express-mesto-gha)
7. [Mesto (фронтенд и бэкенд)](https://github.com/alexeylavrinenkov/react-mesto-api-full)
8. [Movies Explorer (фронтенд)](https://github.com/alexeylavrinenkov/movies-explorer-frontend)
9. Movies Explorer (бэкенд) ⬅ текущий репозиторий
