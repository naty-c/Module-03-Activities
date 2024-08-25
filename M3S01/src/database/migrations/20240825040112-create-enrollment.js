'use strict';

const Enrollment = require("../../models/Enrollment")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Enrollment.tableName, Enrollment.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Enrollment.tableName);  
  }
};
