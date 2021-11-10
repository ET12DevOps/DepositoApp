'use strict';

module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('persona', {
    idPersona: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING
    },
    apellido: {
      type: DataTypes.STRING
    },
    dni: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.BOOLEAN
    }
  }, {
    freezeTableName: true
  });

  return Persona;
};
