const { Model, DataTypes } = require('sequelize');

const { PERFIL_TABLE } = require('./perfil.model');
const USER_TABLE = 'users';

const UserSchema = {
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
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cell: {
    allowNull: false,
    unique: true,
    type: DataTypes.BIGINT,
  },
  perfilId: {
    allowNull: false,
    field: 'perfil_id',
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: PERFIL_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class User extends Model {
  static associate(models) {
    this.belongsTo(models.Perfil, {as: 'perfil'});
    this.hasMany(models.Orden, {
      as: 'ordenes',
      foreignKey: 'userId',
    });
    }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
