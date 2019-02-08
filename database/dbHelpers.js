const { connection } = require('./index.js');

const searchForCities = (metro, callback) => {
	connection.query(`SELECT * FROM cities WHERE metroId = (SELECT id FROM metros WHERE metro = '${metro}')`, (err, result) => {
		if (err) { callback(err); }
		else { callback(null, result); }
	});
};

const queryCategories = (query, callback) => {
	connection.query(`SELECT * FROM cities WHERE city LIKE '%${query}%';`, (err, cities) => {
		if (err) { callback(err); }
		else {
			connection.query(`SELECT * FROM cuisines WHERE cuisineName LIKE '%${query}%';`, (err, cuisines) => {
				if (err) { callback(err); }
				else {
					connection.query(`SELECT * FROM restaurants WHERE restaurantName like '%${query}%';`, (err, { restaurants }) => {
						if (err) { callback(err); }
						else { callback(null, { cities, cuisines, restaurants }); }
					});
				}
			});
		}
	});
};

module.exports = { searchForCities, queryCategories };
