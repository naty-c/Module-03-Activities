const { Router } = require('express');
const EnrollmentController = require('../controllers/EnrollmentController');
const { auth } = require('../middlewares/auth');

const enrollmentRouter = new Router();

enrollmentRouter.post('/', auth, EnrollmentController.create);

module.exports = enrollmentRouter;