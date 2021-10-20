'use strict';

module.exports = (sequelize, DataTypes) => {
  const Motivo = sequelize.define('motivo', {
    idMotivo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING
    }
  });

  return Motivo;
};
