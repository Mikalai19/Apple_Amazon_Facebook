'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accessories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      caseSize: {
        type: Sequelize.INTEGER
      },
      bandSize: {
        type: Sequelize.STRING
      },
      productInfo: {
        type: Sequelize.STRING
      },
      compatibility: {
        type: Sequelize.INTEGER
      },
      recomended: {
        type: Sequelize.STRING
      },
      storePickup: {
        type: Sequelize.STRING
      },
      delivery: {
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
    await queryInterface.dropTable('Accessories');
  }
};