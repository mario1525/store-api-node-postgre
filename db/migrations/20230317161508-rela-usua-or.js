'use strict';

const { OrdenSchema, ORDEN_TABLE} = require('./../models/orden.model');
const { UserSchema, USER_TABLE} = require('./../models/user.models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(ORDEN_TABLE, OrdenSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {
    await queryInterface.drop(ORDEN_TABLE, OrdenSchema);
    await queryInterface.drop(USER_TABLE, UserSchema);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
