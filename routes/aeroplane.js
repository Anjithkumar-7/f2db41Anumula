var express = require('express');
const aeroplane_controlers= require('../controllers/aeroplane');
var router = express.Router();

/* GET aeroplane */
router.get('/', aeroplane_controlers.aeroplane_view_all_Page );
module.exports = router;
