var aeroplane = require('../models/aeroplane');
// List of all Costumes
exports.aeroplane_list = async function(req, res) {
    try{
    theaeroplane = await aeroplane.find();
    res.send(theaeroplane);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Aeroplane.
exports.aeroplane_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane detail: ' + req.params.id);
};
// Handle Aeroplane delete form on DELETE.
exports.aeroplane_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane delete DELETE ' + req.params.id);
};
// Handle Aeroplane update form on PUT.
exports.aeroplane_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.aeroplane_view_all_Page = async function(req, res) {
    try{
    theaeroplane = await aeroplane.find();
    res.render('aeroplane', { title: 'aeroplane Search Results', results: theaeroplane });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle Costume create on POST.
exports.aeroplane_create_post = async function(req, res) {
    console.log(req.body)
    let document = new aeroplane();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.aer_class = req.body.aer_class;
    document.aer_fare = req.body.aer_fare;
    document.aer_mem = req.body.aer_mem;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };