const { Model, DataTypes } = require('sequelize');

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
  Email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cell: {
    allowNull: false,
    unique: true,
    type: DataTypes.BIGINT,
  },
};

class User extends Model {
  static associate(models) {
    this.hasMany(models.Orden, {
      as: 'ordenes',
      foreignKey: 'userId'
    })
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
