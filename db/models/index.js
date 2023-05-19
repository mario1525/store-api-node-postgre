const { Category, CategorySchema } = require('./categori.model');
const { Customer, CustomerSchema } = require('./customer.models');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./orden.model');
const { OrderProduct, OrderProductSchema } = require('./productOrden.model');
const { User, UserSchema } = require('./user.model');
const { Inventario, InventarioSchema } = require('./inventario.model');

function setupModels(sequelize) {
  // model user
  User.init(UserSchema, User.config(sequelize));
  // model customer
  Customer.init(CustomerSchema, Customer.config(sequelize));
  // model product
  Product.init(ProductSchema, Product.config(sequelize));
  // model order
  Order.init(OrderSchema, Order.config(sequelize));
  // model orderProduct
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  // model category
  Category.init(CategorySchema, Category.config(sequelize));
  // model inventario
  Inventario.init(InventarioSchema, Inventario.config(sequelize));

  // associate
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
