const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('QuantumEcom', 'smartdev', '123456', {
  host: 'localhost', // or your SQL server host
  port: 1433,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false, // for Azure
      trustServerCertificate: true // if you're using a self-signed certificate
    }
  },
});

module.exports = sequelize;