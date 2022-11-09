var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var aeroplane_controller = require('../controllers/aeroplane');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// AEROPLANE ROUTES ///
// POST request for creating a Aeroplane.
router.post('/aeroplanes', aeroplane_controller.aeroplane_create_post);
// DELETE request to delete Aeroplane.
router.delete('/aeroplanes/:id', aeroplane_controller.aeroplane_delete);
// PUT request to update Aeroplane.
router.put('/aeroplanes/:id', aeroplane_controller.aeroplane_update_put);
// GET request for one Aeroplane.
router.get('/aeroplanes/:id', aeroplane_controller.aeroplane_detail);
// GET request for list of all aeroplane items.
router.get('/aeroplanes', aeroplane_controller.aeroplane_list);
module.exports = router;