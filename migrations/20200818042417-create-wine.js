'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wine: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      appelation: {
        type: Sequelize.STRING
      },
      vintage: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wines');
  }
};