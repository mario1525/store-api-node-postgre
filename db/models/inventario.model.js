const { Model, DataTypes } = require('sequelize');

const INVENTARIO_TABLE = 'inventario';

const InventarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  idProduct: {
    allowNull: false,
    field: 'id_product',
    type: DataTypes.INTEGER,
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Inventario extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVENTARIO_TABLE,
      modelName: 'Inventario',
      timestamps: false,
    };
  }
}

module.exports = { INVENTARIO_TABLE, InventarioSchema, Inventario };
