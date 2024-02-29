'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'admin',
      user_name: 'admin',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'programador',
      user_name: 'programador',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
