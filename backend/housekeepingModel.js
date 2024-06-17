const mongoose = require('mongoose');

const housekeepingSchema = new mongoose.Schema({
    name: String,
    roomNumber: Number
});

const HousekeepingRequest = mongoose.model('HousekeepingRequests', housekeepingSchema);
module.exports = {
    HousekeepingRequest
}