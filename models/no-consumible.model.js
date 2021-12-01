'use strict';

module.exports = (sequelize, DataTypes) => {
  const Noconsumible = sequelize.define('noconsumible', {
    idNoconsumible: {
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
    existenciaInicial: {
      type: DataTypes.INTEGER
    },
    existenciaActual: {
      type: DataTypes.INTEGER
    },
    detalle: {
      type: DataTypes.STRING
    },
    idUnidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
      freezeTableName: true
  });

  return Noconsumible;
};

