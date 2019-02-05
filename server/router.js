const express = require('express');
const { getCities, getSearchResults } = require('./controller.js');

const router = express.Router();

router.route('/nav/:metro')
	.get(getCities);

router.route('/search/:searched')
	.get(getSearchResults);

module.exports = router;
