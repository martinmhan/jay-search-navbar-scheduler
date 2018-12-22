const express = require('express');
const router = express.Router();
const { getCities } = require('./controller.js');

router.route('/nav/')
    .get(getCities)

// router.route('/search/:query')
//     .get(whatevergetfunction)



module.exports = router;