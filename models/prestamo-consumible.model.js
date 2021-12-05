'use strict';

module.exports = (sequelize, DataTypes) => {
  const PrestamoConsumible = sequelize.define('prestamoConsumible', {
    // idPrestamoConsumible: {
    //   type: DataTypes.INTEGER,
    //   // primaryKey: true,
    //   // allowNull: false,
    //   autoIncrement: true,
    //   uniqueKey: true
    // },
    idConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nroPrestamo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    devuelto: {
      type: DataTypes.BOOLEAN
    },
    detalle: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return PrestamoConsumible;
};
