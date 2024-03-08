const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('quantum', 'AAA', 'aaa', {
  host: 'localhost', // or your SQL server host
  port: 1433,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // for Azure
      trustServerCertificate: true // if you're using a self-signed certificate
    }
  },
  logging: false, // toggle this to see SQL logs in the console
});

module.exports = sequelize;