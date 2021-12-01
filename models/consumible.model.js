'use strict';

const { Association } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Consumible = sequelize.define('consumible', {
    idConsumible: {
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
      allowNull: false
    }
  }, {
      freezeTableName: true
  });

  Consumible.association = function(models){
     Consumible.hasOne(models.Unidad,{
       foreignKey: 'idUnidad'
     })
  };

  return Consumible;
};
