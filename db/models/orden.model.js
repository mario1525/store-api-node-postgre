const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDEN_TABLE = 'orden';

const OrdenSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  idUsuario: {
    allowNull: false,
    field: 'id_usuario',
    type: DataTypes.INTEGER,
  },
  ordenAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'orden_at',
    defaultValue: Sequelize.now,
  },
};

class Orden extends Model {
  static associate() {
    //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDEN_TABLE,
      modelName: 'Orden',
      timestamps: false,
    };
  }
}

module.exports = { ORDEN_TABLE, OrdenSchema, Orden };
