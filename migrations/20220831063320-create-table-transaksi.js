'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('transaksi', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      transactionDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      debitCreditStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('transaksi');
  }
};
