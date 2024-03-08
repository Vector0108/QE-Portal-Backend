const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Path to your sequelize configuration

const User = sequelize.define('User', {
    // Define attributes
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    // Other model options
    tableName: 'Users', // Explicitly specify the table name
    timestamps: true // Automatically add the timestamp fields createdAt and updatedAt
});

module.exports = User;