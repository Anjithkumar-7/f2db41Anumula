var express = require('express');
const aeroplane_controlers= require('../controllers/aeroplane');
var router = express.Router();

/* GET aeroplane */
router.get('/', aeroplane_controlers.aeroplane_view_all_Page );
router.get('/detail', aeroplane_controlers.aeroplane_view_one_Page); 
router.get('/create', aeroplane_controlers.aeroplane_create_Page); 
router.get('/update', aeroplane_controlers.aeroplane_update_Page);
router.get('/delete', aeroplane_controlers.aeroplane_delete_Page); 
module.exports = router;

