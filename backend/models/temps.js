const mongoose = require('mongoose');
const tempSchema = mongoose.Schema({
    
    departure: String,
    arrival: String,
    date: Date,
    price: Number,

});

const Temp = mongoose.model('temps', tempSchema);

module.exports = Temp;