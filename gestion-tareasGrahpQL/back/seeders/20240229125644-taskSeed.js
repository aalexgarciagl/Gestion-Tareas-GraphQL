'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tasks', [{
      descripcion: "CRUD usuarios",
      dificultad: "S",
      horas_previstas: 1,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Implement login functionality",
      dificultad: "M",
      horas_previstas: 3,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Create user registration form",
      dificultad: "S",
      horas_previstas: 2,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Design homepage layout",
      dificultad: "M",
      horas_previstas: 4,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Implement search functionality",
      dificultad: "L",
      horas_previstas: 6,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Create API endpoints for data retrieval",
      dificultad: "XL",
      horas_previstas: 8,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Implement data validation for user inputs",
      dificultad: "M",
      horas_previstas: 4,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Optimize database queries for better performance",
      dificultad: "XL",
      horas_previstas: 10,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Create user profile page",
      dificultad: "S",
      horas_previstas: 2,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Implement password reset functionality",
      dificultad: "M",
      horas_previstas: 4,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: "Design and implement email notification system",
      dificultad: "L",
      horas_previstas: 6,
      horas_realizadas: 0,
      porcentage_realizacion: 0,
      completada: 0,
      asignada: null,
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
