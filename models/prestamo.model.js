'use strict';

module.exports = (sequelize, DataTypes) => {
  const Prestamo = sequelize.define('prestamo', {
    nroPrestamo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      uniqueKey: true,
      allowNull: false,
      autoIncrement: true
    },
    idPersona: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    idMotivo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  return Prestamo;
};
