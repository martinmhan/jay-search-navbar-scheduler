const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const searchForCities = (metro, callback) => {
    connection.query(`SELECT * FROM cities WHERE metroId = (SELECT id FROM metros WHERE metro = '${metro}')`, function (err, result) {
        if (err) { callback(err) }
        else { callback(null, result) }
    })
}

const searchQuery = (query, callback) => {

}

// console.log(mapSingleItem(metroList))

module.exports = { searchForCities };
module.exports = connection;