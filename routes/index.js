const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const notFoundHandler = require('../middlewares/notFoundHandler');
const { loginValidator, createUserValidator } = require('../middlewares/validator');
const movieRouter = require('./movies');
const userRouter = require('./users');

router.use('/signin', loginValidator, login);
router.use('/signup', createUserValidator, createUser);

router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', notFoundHandler);

module.exports = router;
