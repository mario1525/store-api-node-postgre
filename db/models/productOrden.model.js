const { Model, DataTypes } = require('sequelize');

const PRODUCTORD_TABLE = 'produc_oreden';

const PrductorSchema = {
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
  idOrden: {
    allowNull: false,
    field: 'id_orden',
    type: DataTypes.INTEGER,
  },
};

class ProducOreden extends Model {
  static associate() {
    //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTORD_TABLE,
      modelName: 'Productor',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCTORD_TABLE, PrductorSchema, ProducOreden };
