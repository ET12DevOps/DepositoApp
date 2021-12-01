'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

db.User = require("./user.model.js")(sequelize, Sequelize);
db.Role = require("./role.model.js")(sequelize, Sequelize);
db.Login = require("./login.model.js")(sequelize, Sequelize);
db.UserRole = require("./userRole.model.js")(sequelize, Sequelize);

db.Consumible = require("./consumible.model")(sequelize, Sequelize);
db.DevolucionConsumible = require("./devolucion-consumible.model")(sequelize, Sequelize);
db.DevolucionNoConsumible = require("./devolucion-no-consumible.model")(sequelize, Sequelize);
db.Documento = require("./documento.model")(sequelize, Sequelize);
db.MotivoDocumento = require("./motivo-documento.model")(sequelize, Sequelize);
db.Motivo = require("./motivo.model")(sequelize, Sequelize);
db.NoConsumible = require("./no-consumible.model")(sequelize, Sequelize);
db.Persona = require("./persona.model")(sequelize, Sequelize);
db.PrestamoConsumible = require("./prestamo-consumible.model")(sequelize, Sequelize);
db.PrestamoNoConsumible = require("./prestamo-no-consumible.model")(sequelize, Sequelize);
db.Prestamo = require("./prestamo.model")(sequelize, Sequelize);
db.Unidad = require("./unidad.model")(sequelize, Sequelize);

db.Consumible.associate({Unidad})

db.Documento.belongsToMany(db.Motivo, {
  through: "motivoDocumento",
  as: "DocumentoMotivo",
  foreignKey: "idDocumento"
});

db.Motivo.belongsToMany(db.Documento, {
  through: "motivoDocumento",
  as: "DocumentoMotivo",
  foreignKey: "idMotivo"
});

db.Motivo.hasMany(db.Prestamo, {
  foreignKey: "idMotivo"
}); 

db.Persona.hasMany(db.Prestamo, {
  foreignKey: "idPersona"
});

db.Unidad.hasMany(db.Consumible, {
  foreignKey: "idUnidad"
});

db.Unidad.hasMany(db.NoConsumible,{
  foreignKey: "idUnidad"
}); 

db.Consumible.belongsToMany(db.Prestamo, {
  through: "prestamoConsumible",
  as: "PrestamosConsumible",
  foreignKey: "idConsumible"
});

db.Prestamo.belongsToMany(db.Consumible, {
  through: "prestamoConsumible",
  as: "ConsumiblesPrestamo",
  foreignKey: "numPrestamo"
});

db.NoConsumible.belongsToMany(db.Prestamo, {
  through: "prestamoNoConsumible",
  as: "NoConsumiblesPrestamo",
  foreignKey: "idNoConsumible"
}); 

db.Prestamo.belongsToMany(db.NoConsumible, {
  through: "prestamoNoConsumible",
  as: "NoConsumiblePrestamos",
  foreignKey: "numPrestamo"
});

db.PrestamoConsumible.hasMany(db.DevolucionConsumible, {
  foreignKey: "idPrestamoConsumible"
});

db.PrestamoNoConsumible.hasMany(db.DevolucionNoConsumible, {
  foreignKey: "idPrestamoNoConsumible"
});

db.Login.belongsTo(db.User, {
  foreignKey: "userId"
})

db.User.belongsToMany(db.Role, {
  through: "UserRoles",
  as: "roles",
  foreignKey: "userId"
})

db.Role.belongsToMany(db.User, {
  through: "UserRoles",
  as: "users",
  foreignKey: "roleId"
})


module.exports = db;

