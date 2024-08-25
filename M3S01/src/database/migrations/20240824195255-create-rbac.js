'use strict';

const Role = require("../../models/Role")
const Permission = require("../../models/Permission")
const UserRole = require("../../models/UserRole")
const PermissionRole = require("../../models/PermissionRole")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Role.tableName, Role.tableAttributes);
    await queryInterface.createTable(Permission.tableName, Permission.tableAttributes);
    await queryInterface.createTable(UserRole.tableName, UserRole.tableAttributes);
    await queryInterface.createTable(PermissionRole.tableName, PermissionRole.tableAttributes);
  },
async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PermissionRole.tableName);
    await queryInterface.dropTable(UserRole.tableName);
    await queryInterface.dropTable(Permission.tableName);
    await queryInterface.dropTable(Role.tableName);
  }
};
