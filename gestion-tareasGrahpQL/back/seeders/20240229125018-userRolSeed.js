'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usuario_roles', [{
      id_rol: 1,
      id_user: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_rol: 2,
      id_user: 2,
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
