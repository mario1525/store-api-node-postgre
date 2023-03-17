'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { CategorySchema, CATEGORY_TABLE } = require('./../models/categori.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {
    await queryInterface.drop(PRODUCT_TABLE, ProductSchema);
    await queryInterface.drop(CATEGORY_TABLE, CategorySchema);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
