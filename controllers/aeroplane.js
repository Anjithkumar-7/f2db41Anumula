var aeroplane = require('../models/aeroplane');
// List of all Aeroplanes
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
// Handle Aeroplane delete on DELETE. 
exports.aeroplane_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await aeroplane.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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

   // Handle Aeroplane create on POST.
exports.aeroplane_create_post = async function(req, res) {
    console.log(req.body)
    let document = new aeroplane();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"aeroplane_type":"goat", "cost":12, "size":"large"}
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

   // for a specific aeroplane. 
exports.aeroplane_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await aeroplane.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

//Handle aeroplane update form on PUT. 
exports.aeroplane_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await aeroplane.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.aer_class)  
               toUpdate.aer_class = req.body.aer_class; 
        if(req.body.aer_fare) toUpdate.aer_fare = req.body.aer_fare; 
        if(req.body.aer_mem) toUpdate.aer_mem = req.body.aer_mem; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

//Handle a show one view with id specified by query 
exports.aeroplane_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await aeroplane.findById( req.query.id) 
        res.render('aeroplanedetail',  
{ title: 'Aeroplane Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a aeroplane. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.aeroplane_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('aeroplanecreate', { title: 'Aeroplane Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a aeroplane. 
// query provides the id 
exports.aeroplane_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await aeroplane.findById(req.query.id) 
        res.render('aeroplaneupdate', { title: 'Aeroplane Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.aeroplane_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await aeroplane.findById(req.query.id) 
        res.render('aeroplanedelete', { title: 'Aeroplane Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 