const { Model, DataTypes } = require('sequelize');

const PERFIL_TABLE = 'perfil';

const PerfilSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
};

class Perfil extends Model {
  static associate(models) {
    this.hasOne(models.User, {
      as: 'usuario',
      foreignKey: 'perfilId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERFIL_TABLE,
      modelName: 'Perfil',
      Timetamps: false,
    };
  }
}

module.exports = { Perfil, PerfilSchema, PERFIL_TABLE };
