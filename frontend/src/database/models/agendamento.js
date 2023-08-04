'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agendamento.init({
    servico: DataTypes.STRING,
    dia: DataTypes.DATE,
    hora: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Agendamento',
    tableName: 'agendamentos'
  });
  return Agendamento;
};