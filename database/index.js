const mysql = require('mysql');
const Sequelize = require('sequelize');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const sequelize = new Sequelize('tableit', 'root', 'password', {
	host: '3.84.195.96',
	port: 3306,
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
