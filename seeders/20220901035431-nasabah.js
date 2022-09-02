'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('nasabah', [
      {
        accountId: 1,
        name: 'Customer1',
      },
      {
        accountId: 2,
        name: 'Customer2',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('nasabah', null, {});
  }
};
