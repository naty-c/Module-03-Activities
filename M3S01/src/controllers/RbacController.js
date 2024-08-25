const Permission = require("../models/Permission");
const PermissionRole = require("../models/PermissionRole");
const Role = require("../models/Role");
const User = require("../models/User");
const UserRole = require("../models/UserRole");

class RbacController {

    // List Permissions
    async listPermissions(req, res){ 
        const data = await Permission.findAll();

        return res.status(200).send(data);
    }

    // List Roles
    async listRoles(req, res){ 
        const data = await Role.findAll();

        return res.status(200).send(data);
    }

    // Create One Permission
    async createOnePermission(req, res){ 
        try {
            const data = req.body;

            if(!data.description){
                return res.status(400).send("Description is mandatory");
            }
            const permissionExists = await Permission.findOne({where: {description: data.description}});

            if(permissionExists){
                return res.status(400).send("There is already a permission with this description!");
            }

            const newPermission = await Permission.create(data);
            
            return res.status(201).send(newPermission);
        } catch (error){
            console.log(error.message)
            return res.status(500).send("Ops! Something went wrong!");
        }
    }

    // Create One Role
    async createOneRole(req, res){
        try {
            const data = req.body;

            if(!data.description){
                return res.status(400).send("Description is mandatory");
            }

            const roleExists = await Role.findOne({where: {description: data.description}});
            if(roleExists){
                return res.status(400).send("There is already a role with this description!");
            }

            const newRole = await Role.create(data);
            
            return res.status(201).send(newRole);
        } catch (error){
            console.log(error.message)
            return res.status(500).send("Ops! Something went wrong!");
        }
    }

    // List Permission by Role
    async listPermissionsByRole(req, res){
        try {
            const {id} = req.params;


            const role = await Role.findOne({
                where: {id: id},
                include: [{model: Permission}]
            })

            // Another way to do the same
            // const role = await Role.findByPk(id, {
            //     include: [{model: Permission}]
            // })

            if(!role){
                return res.status(404).send("Role not found!");
            }
            return res.status(200).send(role);
        } catch (error){
            console.log(error.message)
            return res.status(500).send("Ops! Something went wrong!");
        }
    }

    // Add Permission to Role
    async addPermissionToRole(req, res){ 
        try {
            const {permissionId, roleId} = req.body;


            if(!permissionId || !roleId){
                return res.status(400).send("Permission ID and/or Role ID is mandatory!");
            }
            const roleExists = await Role.findByPk(roleId);
            const permissionExists = await Permission.findByPk(permissionId);


            if(!roleExists){
                return res.status(400).send("Role not found!");
            }
            if(!permissionExists){
                return res.status(400).send("Permission not found!");
            }

            // 1ª way
            const permissionNewRole = await PermissionRole.create({
                permissionId: permissionId,
                roleId: roleId
            })

            // 2ª way [Method using auxiliary features from Sequelize, but less recommended than the 1º way]
           //  await roleExists.addPermissions(permissionExists) 

            return res.status(201).send(permissionNewRole);
        } catch (error){
            console.log(error.message)
            return res.status(500).send("Ops! Something went wrong!");
        }
    }

    // Add Role to User
    async addRoleToUser(req, res){
        try {
            const {userId, roleId} = req.body;


            if(!userId || !roleId){
                return res.status(400).send("User ID and/or Role ID is mandatory!");
            }

            const userExists = await User.findByPk(userId);
            const roleExists = await Role.findByPk(roleId);
            
            if(!roleExists){
                return res.status(400).send("Role not found!");
            }

            if(!userExists){
                return res.status(400).send("User not found!");
            }
            const userNewRole = await UserRole.create({
                roleId: roleId,
                userId: userId
            })
                return res.status(201).send(userNewRole);
        } catch (error){
            console.log(error.message)
            return res.status(500).send("Ops! Something went wrong!");
        }
    }
}

module.exports = new RbacController()
