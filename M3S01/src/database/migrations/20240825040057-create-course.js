'use strict';

const Course = require("../../models/Course")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Course.tableName, Course.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Course.tableName);  
  }
};
