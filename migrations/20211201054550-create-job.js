'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      postedBy: {
        type: Sequelize.STRING
      },
      jobDetails: {
        type: Sequelize.STRING
      },
      postedDate: {
        type: Sequelize.INTEGER
      },
      referenceOption: {
        type: Sequelize.STRING
      },
      workLocation: {
        type: Sequelize.STRING
      },
      remoteRole: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      benefits: {
        type: Sequelize.STRING
      },
      scedule: {
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
    await queryInterface.dropTable('Jobs');
  }
};