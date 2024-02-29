'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [{
      nombre: "administrador",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "programador",
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
