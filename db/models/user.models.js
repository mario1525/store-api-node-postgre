const { Model, DataTypes, Sequelize } = require('sequelize');

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
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  perfilId: {
    field: 'perfil_id',
    allowNull: false,
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
    this.belongsTo(models.Perfil, { as: 'perfil' });
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'userId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Users',
      timestamps: false,
    };
  }
}

module.exports = { User, UserSchema, USER_TABLE };
