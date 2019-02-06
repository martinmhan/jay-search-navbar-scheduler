const { connection } = require('./index.js');
// const { sequelize } = require('./index.js');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

// connection.query('CREATE TABLE IF NOT EXISTS cities (city VARCHAR(255), address VARCHAR(255));');
// connection.query('CREATE TABLE IF NOT EXISTS restaurants (restaurantName VARCHAR(255));');
// connection.query('CREATE TABLE IF NOT EXISTS cuisines (cuisineName VARCHAR(255));');

// const Cities = sequelize.define('cities', {
// 	city: Sequelize.STRING,
// 	metroId: Sequelize.INTEGER
// }, { timestamps: false });

// const Restaurants = sequelize.define('restaurants', {
// 	restaurantName: Sequelize.STRING
// }, { timestamps: false });

// const Cuisines = sequelize.define('cuisines', {
// 	cuisineName: Sequelize.STRING
// }, { timestamps: false });

// sequelize.sync();

const searchForCities = (metro, callback) => {
	connection.query(`SELECT * FROM cities WHERE metroId = (SELECT id FROM metros WHERE metro = '${metro}')`, (err, result) => {
		if (err) { callback(err); }
		else { callback(null, result); }
	});
};

const queryCategories = (query, callback) => {
	// let result = {};
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

// const queryCategories = (query, callback) => {
// 	let result = {};
// 	Cities.findAll({
// 		where: {
// 			city: {
// 				[Op.like]: `%${query}%`
// 			}
// 		}
// 	})
// 		.then(data => {
// 			result['cities'] = data;
// 			Cuisines.findAll({
// 				where: {
// 					cuisineName: {
// 						[Op.like]: `%${query}%`
// 					}
// 				}
// 			})
// 				.then(data2 => {
// 					result['cuisines'] = data2;
// 					Restaurants.findAll({
// 						where: {
// 							restaurantName: {
// 								[Op.like]: `%${query}%`
// 							}
// 						}
// 					})
// 						.then(data => {
// 							result['restaurants'] = data;
// 							callback(null, result);
// 						})
// 						.catch((err) => { callback(err); });
// 				})
// 				.catch((err) => { callback(err); });
// 		})
// 		.catch(err => { callback(err); });
// };

// module.exports = { searchForCities, queryCategories, Cities, Restaurants, Cuisines };
