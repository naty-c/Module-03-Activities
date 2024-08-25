const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const loginRouter = new Router();

loginRouter.post('/', LoginController.login);

module.exports = loginRouter;