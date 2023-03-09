const { Model, DataTypes } = require("sequelize");

const CATEGORY_TABLE = 'category';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  }
};

class Category extends Model {
  static associate() {
    //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'category',
      timestamps: false
    };
  }
}

module.exports = {CATEGORY_TABLE, CategorySchema, Category};
