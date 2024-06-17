const mongoose = require('mongoose');

const lunchSchema = new mongoose.Schema({
    name: String,
    college: String,
    phoneNumber: Number
});

const LunchRequest = mongoose.model('LunchRequests', lunchSchema);

module.exports = {
    LunchRequest
}