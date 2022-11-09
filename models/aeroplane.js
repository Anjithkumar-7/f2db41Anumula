const mongoose = require("mongoose")
const aeroplaneSchema = mongoose.Schema({
aer_class: String,
aer_fare: Number,
aer_mem: String
})
module.exports = mongoose.model("aeroplane",
aeroplaneSchema)