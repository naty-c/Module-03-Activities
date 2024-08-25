'use strict';

const bcrypt = require('bcryptjs');
const User = require("../../models/User")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const saltRounds = 10;

    return queryInterface.bulkInsert(User.tableName, [
      {
        name: 'Yuna',
        email: 'yuna@email.com',
        password: bcrypt.hashSync('yunapass', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tidus',
        email: 'tidus@email.com',
        password: bcrypt.hashSync('tiduspass', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lulu',
        email: 'lulu@email.com',
        password: bcrypt.hashSync('lulupass', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rikku',
        email: 'rikku@email.com',
        password: bcrypt.hashSync('rikkupass', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Wakka',
        email: 'wakka@email.com',
        password: bcrypt.hashSync('wakkapass', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(User.tableName, null, {});
  },
};
