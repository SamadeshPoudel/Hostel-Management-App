const mongoose = require('mongoose');

const lunchSchema = new mongoose.Schema({
    name: String,
    college: String,
    phoneNumber: Number,
    // userId: {type: String, required: true}
    userId: String
});

const LunchRequest = mongoose.model('LunchRequests', lunchSchema);

module.exports = {
    LunchRequest
}
// but how do i know that req.user.id contains