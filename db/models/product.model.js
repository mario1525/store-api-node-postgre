const { Model, DataTypes } = require('sequelize');


const PRODUCT_TABLE = 'product';

const { CATEGORY_TABLE} = require('./categori.model');

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
  price: {
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
    unique: true,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, {as: 'category'});
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
