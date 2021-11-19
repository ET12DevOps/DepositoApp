'use strict';

module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define('documento', {
    idDocumento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.INTEGER
    },
    descripcion: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return Documento;
};
