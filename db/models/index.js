const { User, UserSchema } = require('./user.models');
const { Orden, OrdenSchema } = require('./orden.model');
const { Category, CategorySchema } = require('./categori.model');
const { Product, ProductSchema } = require('./product.model');
const { ProducOreden, PrductorSchema } = require('./productOrden.model');
const { Inventario, InventarioSchema } = require('./inventario.model');

function setupModels(sequelize) {
  //model user
  User.init(UserSchema, User.config(sequelize));
  //model category
  Category.init(CategorySchema, Category.config(sequelize));
  //model orden
  Orden.init(OrdenSchema, Orden.config(sequelize));
  //model product
  Product.init(ProductSchema, Product.config(sequelize));
  //model ordenProduct
  ProducOreden.init(PrductorSchema, ProducOreden.config(sequelize));
  //model inventario
  Inventario.init(InventarioSchema, Inventario.config(sequelize));

  //associate
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
