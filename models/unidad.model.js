'use strict';

module.exports = (sequelize, DataTypes) => {
  const Unidad = sequelize.define('unidad', {
    idUnidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING
    },
    referencia: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return Unidad;
};
