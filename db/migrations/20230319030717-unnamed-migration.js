'use strict';

const { ORDEN_TABLE } = require('./../models/orden.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(ORDEN_TABLE, 'usuario_id', {
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface) {
    await queryInterface.drop(ORDEN_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
