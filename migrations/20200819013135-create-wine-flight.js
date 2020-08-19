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
      name: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      wine1: {
        type: Sequelize.INTEGER
      },
      wine2: {
        type: Sequelize.INTEGER
      },
      wine3: {
        type: Sequelize.INTEGER
      },
      wine4: {
        type: Sequelize.INTEGER
      },
      wine5: {
        type: Sequelize.INTEGER
      },
      wine6: {
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
    await queryInterface.dropTable('wineFlights');
  }
};