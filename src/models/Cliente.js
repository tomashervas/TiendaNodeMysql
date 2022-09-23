const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db')

class Cliente extends Model {}

Cliente.init({
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
  }
}, {
  sequelize,
  paranoid: true,
  modelName: 'cliente'
});

module.exports = Cliente;