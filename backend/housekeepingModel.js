const mongoose = require('mongoose');

const housekeepingSchema = new mongoose.Schema({
    name: String,
    roomNumber: Number,
    userId: String
});

const HousekeepingRequest = mongoose.model('HousekeepingRequests', housekeepingSchema);
module.exports = {
    HousekeepingRequest
}