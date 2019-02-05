const mysql = require('mysql');
const Sequelize = require('sequelize');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const sequelize = new Sequelize('tableit', 'root', 'password', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	operatorsAliases: false
});

module.exports = { connection, sequelize };
