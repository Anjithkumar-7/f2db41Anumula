const mongoose = require("mongoose")
const aeroplaneSchema = mongoose.Schema({
aer_class: String,
aer_fare: {type:Number, max:40000},
aer_mem: {type:String, min:1}
})
module.exports = mongoose.model("aeroplane",aeroplaneSchema)