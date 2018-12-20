const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const Sequelize = require('sequelize');
const sequelize = new Sequelize('opentable', 'root', 'student', {
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

const Metros = sequelize.define('metros', {
    metro: Sequelize.STRING,
});

const Cities = sequelize.define('cities', {
    city: Sequelize.STRING,
    metroId: Sequelize.INTEGER
});

const Dates = sequelize.define('dates', {
    selectedDate: Sequelize.STRING,
});

const Reservations = sequelize.define('reservations', {
    dateId: Sequelize.INTEGER,
    currentStatus: Sequelize.BOOLEAN,
    partyCount: Sequelize.INTEGER
});

const Restaurants = sequelize.define('restaurants', {
    restaurantId: Sequelize.INTEGER,
    restaurantName: Sequelize.STRING,
    cuisineId: Sequelize.INTEGER
});
const Cuisines = sequelize.define('cuisines', {
    cuisineName: Sequelize.STRING,
});

sequelize.sync()

const getAllLines = function (callback) {
    // TODO - your code here!

}

module.exports = {
    getAllLines
};
