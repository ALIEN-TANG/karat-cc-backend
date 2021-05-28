"use strict";
const { USER, CARD, TRANSACTIONS } = require("../data/mock");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("User", [USER], {});
    await queryInterface.bulkInsert("Card", [CARD], {});
    await queryInterface.bulkInsert("Transaction", TRANSACTIONS, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkdDelete("User", null, {});
    await queryInterface.bulkdDelete("Card", null, {});
    await queryInterface.bulkdDelete("Transaction", null, {});
  },
};
