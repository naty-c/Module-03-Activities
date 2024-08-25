const { Router } = require('express'); 
const UserController = require('../controllers/UserController');
const { auth } = require('../middlewares/auth');
const { hasPermission } = require('../middlewares/hasPermission');

const userRouter = new Router();

userRouter.get('/', UserController.findAll);
userRouter.get('/:id', auth, hasPermission(['list_user']), UserController.findById);
userRouter.post('/', auth, hasPermission(['create_user']), UserController.createNewUser);
userRouter.put('/:id', auth, hasPermission(['update_user']), UserController.updateUser);
userRouter.delete('/:id', auth, hasPermission(['delete_user']), UserController.deleteUser);

module.exports = userRouter;