const { UserSchema, USER_TABLE } = require('../models/user.model');
const { CategorySchema, CATEGORY_TABLE } = require('../models/categori.model');
const { OrderSchema, ORDER_TABLE } = require('../models/orden.model');
const {
  OrderProductSchema,
  ORDER_PRODUCT_TABLE,
} = require('../models/productOrden.model');
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');
const {
  InventarioSchema,
  INVENTARIO_TABLE,
} = require('../models/inventario.model');
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
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
    await queryInterface.drop(ORDER_TABLE);
    await queryInterface.drop(ORDER_PRODUCT_TABLE);
    await queryInterface.drop(PRODUCT_TABLE);
    await queryInterface.drop(INVENTARIO_TABLE);
    await queryInterface.drop(CUSTOMER_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
