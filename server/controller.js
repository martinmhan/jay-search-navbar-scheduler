const { searchForCities, queryCategories } = require('../database/dbHelpers.js');

const getCities = (req, res) => {
	const metro = req.params.metro;
	searchForCities(metro, (err, data) => {
		if (err) { res.status(404).send(err); }
		else { res.status(200).send(data); }
	});
};

const getSearchResults = (req, res) => {
	const searched = req.params.searched;
	queryCategories(searched, (err, data) => {
		if (err) { res.status(404).send(err); }
		else { res.status(200).send(data); }
	});
};

module.exports = { getCities, getSearchResults };
