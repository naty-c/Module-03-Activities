const { DataTypes } = require("sequelize")
const {connection} = require("../database/connection")

const Role = require("./Role")
const PermissionRole = require("./PermissionRole")

const Permission = connection.define('permissions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

Role.belongsToMany(Permission, {through: 'permissionsRoles'})
Permission.belongsToMany(Role, {through: 'permissionsRoles'})

module.exports = Permission
