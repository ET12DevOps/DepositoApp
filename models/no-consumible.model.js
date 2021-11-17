'use strict';

module.exports = (sequelize, DataTypes) => {
  const NoConsumible = sequelize.define('noConsumible', {
    idNoConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.STRING,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    detalle: {
      type: DataTypes.STRING
    },
    idUnidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    existenciaInicial: {
      type: DataTypes.INTEGER
    },
    existenciaActual: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true
  });

  return NoConsumible;
};
