const connection = require('./index.js');
const { sequelize } = require('./index.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const Cities = sequelize.define('cities', {
    city: Sequelize.STRING,
    metroId: Sequelize.INTEGER
}, {
        timestamps: false
    });
const Restaurants = sequelize.define('restaurants', {
    restaurantName: Sequelize.STRING
}, {
        timestamps: false
    });
const Cuisines = sequelize.define('cuisines', {
    cuisineName: Sequelize.STRING
}, {
        timestamps: false
    });

sequelize.sync();


// MYSQL query (for joining tables)
const searchForCities = (metro, callback) => {
    connection.query(`SELECT * FROM cities WHERE metroId = (SELECT id FROM metros WHERE metro = '${metro}')`, function (err, result) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
    // connection.end();
}

// Sequelize query (to use promises)
const queryCategories = (query, callback) => {
    console.log('its been called bitchhh', query)
    let result = {};
    Cities.findAll({
        where: {
            city: {
                [Op.like]: `%${query}%`
            }
        }
    })
        .then(data => {
            result['cities'] = data;
            Cuisines.findAll({
                where: {
                    cuisineName: {
                        [Op.like]: `%${query}%`
                    }
                }
            })
                .then(data2 => {
                    result['cuisines'] = data2;
                    Restaurants.findAll({
                        where: {
                            restaurantName: {
                                [Op.like]: `%${query}%`
                            }
                        }
                    })
                        .then(data => {
                            result['restaurants'] = data;
                            callback(null, result)
                        })
                })
        })
        .catch(err => {
            callback(err);
        })
}


module.exports = { searchForCities, queryCategories, Cities, Restaurants, Cuisines }