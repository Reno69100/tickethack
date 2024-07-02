const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    
    depature: String,
    arrival: String,
    date: Date,

});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;