const { searchForCities, queryCategories } = require('../database/dbHelpers.js');

const getCities = (req, res) => {
    const metro = req.params.metro;
    searchForCities(metro, (err, data) => {
        if (err) {
            res.status(404).send(err)
        }
        else { res.status(200).send(data) }
    })
}

const getSearchResults = (req, res) => {
    console.log('MARRRRRK');
    const searched = req.params.searched;
    console.log('query mark 3', searched)
    queryCategories(searched, (err, data) => {
        if (err) {
            console.log('errrrrr', err)
            res.status(404).send(err)
        }
        else { res.status(200).send(data) }
    })
}

module.exports = { getCities, getSearchResults };