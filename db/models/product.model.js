const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'product';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  precio: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  detalles: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  idCategoria: {
    allowNull: false,
    field: 'id_category',
    type: DataTypes.INTEGER,
  },
};

class Product extends Model {
  static associate() {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
