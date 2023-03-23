const { User, UserSchema } = require('./user.models');
const { Perfil, PerfilSchema } = require('./perfil.model');
const { Order, OrderSchema } = require('./orden.model');
const { Category, CategorySchema } = require('./categori.model');
const { Product, ProductSchema } = require('./product.model');
const { OrderProduct, OrderProductSchema } = require('./productOrden.model');
const { Inventario, InventarioSchema } = require('./inventario.model');

function setupModels(sequelize) {
  //model user
  User.init(UserSchema, User.config(sequelize));
  //model category
  Category.init(CategorySchema, Category.config(sequelize));
  //model orden
  Order.init(OrderSchema, Order.config(sequelize));
  //model product
  Product.init(ProductSchema, Product.config(sequelize));
  //model ordenProduct
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  //model inventario
  Inventario.init(InventarioSchema, Inventario.config(sequelize));
  //model perfil
  Perfil.init(PerfilSchema, Perfil.config(sequelize));

  //associate
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  User.associate(sequelize.models);
  Order.associate(sequelize.models);
  Perfil.associate(sequelize.models);
}

module.exports = setupModels;
