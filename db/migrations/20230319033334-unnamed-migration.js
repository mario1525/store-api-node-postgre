'use strict';
const { ORDEN_TABLE,OrdenSchema } = require('./../models/orden.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface,) {
    await queryInterface.dropTable(ORDEN_TABLE);
    await queryInterface.createTable(ORDEN_TABLE, OrdenSchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, ) {
    await queryInterface.createTable(ORDEN_TABLE, OrdenSchema);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
