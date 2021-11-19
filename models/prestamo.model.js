'use strict';

module.exports = (sequelize, DataTypes) => {
  const Prestamo = sequelize.define('prestamo', {
    numPrestamo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
