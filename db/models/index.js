const { User, UserSchema } = require('./user.models');
const { Category, CategorySchema } = require('./categori.model');
const { Orden, OrdenSchema } = require('./orden.model');
const { Product, ProductSchema } = require('./product.model');
const { ProducOreden, PrductorSchema } = require('./productOrden.model');
const { Inventario, InventarioSchema } = require('./inventario.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Orden.init(OrdenSchema, Orden.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  ProducOreden.init(PrductorSchema, ProducOreden.config(sequelize));
  Inventario.init(InventarioSchema, Inventario.config(sequelize));
}

module.exports = setupModels;
