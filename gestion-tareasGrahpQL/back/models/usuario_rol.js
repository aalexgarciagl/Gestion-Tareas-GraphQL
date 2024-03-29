'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_rol.init({
    id_user: DataTypes.INTEGER,
    id_rol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario_rol',
    tableName: 'usuario_roles'
  });
  return Usuario_rol;
};