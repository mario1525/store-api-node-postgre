const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.models');

const ORDEN_TABLE = 'orden';

const OrdenSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    field: 'usuario_id',
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  ordenAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'orden_at',
    defaultValue: Sequelize.NOW,
  },
};

class Orden extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'usuario' });
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
