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
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return Motivo;
};
