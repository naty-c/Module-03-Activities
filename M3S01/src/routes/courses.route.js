const { Router } = require('express');
const CourseController = require('../controllers/CourseController');
const { auth } = require('../middlewares/auth');

const courseRouter = new Router()

courseRouter.get('/', CourseController.showAll);
courseRouter.get('/:id', auth,CourseController.showOne);
courseRouter.get('/filter', auth,CourseController.showFilter);
courseRouter.post('/', auth,CourseController.create);
courseRouter.put('/:id', auth,CourseController.update);
courseRouter.delete('/:id', auth,CourseController.delete);

module.exports = courseRouter;