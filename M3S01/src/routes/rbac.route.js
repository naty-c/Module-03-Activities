const { Router } = require('express'); 
const RbacController = require("../controllers/RbacController");

const rbacRouter = new Router();

rbacRouter.post("/createOnePermission", RbacController.createOnePermission);
rbacRouter.post("/createOneRole", RbacController.createOneRole);
rbacRouter.get("/listPermissions", RbacController.listPermissions);
rbacRouter.get("/listRoles", RbacController.listRoles);
rbacRouter.get("/listPermissionsByRole/:id", RbacController.listPermissionsByRole);
rbacRouter.post("/addRoleToUser", RbacController.addRoleToUser);
rbacRouter.post("/addPermissionToRole", RbacController.addPermissionToRole);

module.exports = rbacRouter;
