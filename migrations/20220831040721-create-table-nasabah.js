'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('nasabah', { 
      accountId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('nasabah');
  }
};
