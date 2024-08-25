const jwt = require('jsonwebtoken');
const PermissionRole = require('../models/PermissionRole');
const Permission = require('../models/Permission');

function hasPermission(permissions) {
    return async (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).send("Token not provided!");
        }

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send("Token not provided!");
        }

        const decoded = jwt.verify(token, process.env.SECRET_JWT);
        req.payload = decoded;

        try {
            const roles = await PermissionRole.findAll({
                where: {
                    roleId: req.payload.roles.map((role) => role.id)
                },
                attributes: ['permissionId'],
                include: [{ model: Permission, as: 'permissions' }]
            });

            // Transform the roles data to have permissions as an array
            const rolePermissions = roles.map(role => role.permissions);

            const existPermission = rolePermissions.some((permissionsArray) => {
                // Ensure permissionsArray is an array
                if (!Array.isArray(permissionsArray)) {
                    permissionsArray = [permissionsArray];
                }

                const hasPermission = permissionsArray.some((permission) => {
                    return permissions.includes(permission.description);
                });

                return hasPermission;
            });

            if (!existPermission) {
                return res.status(401).send("You don't have permission to access!");
            }

            next();
        } catch (error) {
            console.log(error);
            return res.status(401).send({
                message: "Authentication failed!",
                cause: error.message});
        }
    };
}

module.exports = { hasPermission }; 
