'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('transaksi', [
      {
        accountId: 1,
        transactionDate: new Date("2022-08-25T00:00:00.000Z"),
        description: "Setor Tunai",
        debitCreditStatus: "C",
        amount: 200000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-08-28T00:00:00.000Z"),
        description: "Beli Pulsa",
        debitCreditStatus: "D",
        amount: 10000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-01T00:00:00.000Z"),
        description: "Bayar Listrik",
        debitCreditStatus: "D",
        amount: 70000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-02T00:00:00.000Z"),
        description: "Tarik Tunai",
        debitCreditStatus: "D",
        amount: 100000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-03T00:00:00.000Z"),
        description: "Setor Tunai",
        debitCreditStatus: "C",
        amount: 300000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-04T00:00:00.000Z"),
        description: "Bayar Listrik",
        debitCreditStatus: "D",
        amount: 50000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-05T00:00:00.000Z"),
        description: "Tarik Tunai",
        debitCreditStatus: "D",
        amount: 50000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-06T00:00:00.000Z"),
        description: "Beli Pulsa",
        debitCreditStatus: "D",
        amount: 40000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-07T00:00:00.000Z"),
        description: "Tarik Tunai",
        debitCreditStatus: "D",
        amount: 50000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-08T00:00:00.000Z"),
        description: "Setor Tunai",
        debitCreditStatus: "C",
        amount: 50000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-09T00:00:00.000Z"),
        description: "Bayar Listrik",
        debitCreditStatus: "D",
        amount: 125000,
      },
      {
        accountId: 1,
        transactionDate: new Date("2022-09-10T00:00:00.000Z"),
        description: "Beli Pulsa",
        debitCreditStatus: "D",
        amount: 20000,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('transaksi', null, {});
  }
};
