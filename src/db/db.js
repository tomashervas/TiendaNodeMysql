const { Sequelize } = require('sequelize');
const db = require('./config.js');

const sequelize = new Sequelize( db.database , db.username, db.password , {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;