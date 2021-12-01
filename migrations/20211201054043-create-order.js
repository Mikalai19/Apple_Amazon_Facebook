'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderPlaced: {
        type: Sequelize.STRING
      },
      totalPrice: {
        type: Sequelize.INTEGER
      },
      shipTo: {
        type: Sequelize.STRING
      },
      orderNumber: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      returnDue: {
        type: Sequelize.STRING
      },
      deliveryDate: {
        type: Sequelize.STRING
      },
      totalOrders: {
        type: Sequelize.INTEGER
      },
      trackingId: {
        type: Sequelize.INTEGER
      },
      rateItem: {
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
    await queryInterface.dropTable('Orders');
  }
};