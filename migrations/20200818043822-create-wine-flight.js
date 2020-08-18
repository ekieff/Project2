'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wineFlights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wine1: {
        type: Sequelize.STRING
      },
      wine2: {
        type: Sequelize.STRING
      },
      wine3: {
        type: Sequelize.STRING
      },
      wine4: {
        type: Sequelize.STRING
      },
      wine5: {
        type: Sequelize.STRING
      },
      wine6: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('wineFlights');
  }
};