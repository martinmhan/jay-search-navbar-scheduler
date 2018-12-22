const express = require('express');
const router = express.Router();
const { getCities, getSearchResults } = require('./controller.js');

router.route('/nav/:metro')
    .get(getCities)

router.route('/search/:searched')
    .get(getSearchResults)



module.exports = router;