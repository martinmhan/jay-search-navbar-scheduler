const { searchForCities } = require('../database/index.js')

const getCities = (req, res) => {
    // const metro = req.params.metro;
    const metro = 'Los_Angeles';
    // console.log('METROOOOOO', metro)
    searchForCities(metro, (err, data) => {
        if (err) {
            console.log(err, 'errrrrr')
            res.status(404).send(err)
        }
        else { res.status(200).send(data) }
    })
}


module.exports = { getCities };