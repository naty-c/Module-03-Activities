const { Router } = require("express");
const userRouter = require("./users.route");
const loginRouter = require("./login.route");
const rbacRouter = require("./rbac.route");
const courseRouter = require("./courses.route");
const enrollmentRouter = require("./enrollments.route");

const routes = Router();

routes.use('/users', userRouter)
routes.use('/login', loginRouter)
routes.use('/rbac', rbacRouter)
routes.use('/courses', courseRouter)
routes.use('/enrollments', enrollmentRouter)

module.exports = routes;