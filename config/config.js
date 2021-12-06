const fs = require('fs');

module.exports = {
    development: {
        username: 'root',
        password: 'root',
        database: 'deposito',
        host: 'localhost',
        dialect: 'mysql'
    },
    test: {
        username: 'root',
        password: 'root',
        database: 'deposito',
        host: 'win2016-01',
        dialect: 'mysql'
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                required: true,
                rejectUnauthorized: false
            }
        }
    }
};