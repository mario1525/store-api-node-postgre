'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.models');
const { CategorySchema, CATEGORY_TABLE } = require('./../models/categori.model');
const { OrdenSchema, ORDEN_TABLE } = require('./../models/orden.model');
const { ProductorSchema, PRODUCTORD_TABLE } = require('./../models/productOrden.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { InventarioSchema, INVENTARIO_TABLE } = require('./../models/user.models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(ORDEN_TABLE, OrdenSchema);
    await queryInterface.createTable(PRODUCTORD_TABLE, ProductorSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(INVENTARIO_TABLE, InventarioSchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface) {
    await queryInterface.drop(USER_TABLE);
    await queryInterface.drop(CATEGORY_TABLE);
    await queryInterface.drop(ORDEN_TABLE);
    await queryInterface.drop(PRODUCTORD_TABLE);
    await queryInterface.drop(PRODUCT_TABLE);
    await queryInterface.drop(INVENTARIO_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
