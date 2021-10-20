'use strict';

module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define('documento', {
    idDocumento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER
    },
    descripcion: {
      type: DataTypes.STRING
    }
  });

  return Documento;
};
