const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    name: String,
    issue: String,
    roomNumber: Number,
    userId: String

});

const ComplainRequest =  mongoose.model('ComplainRequests', complainSchema);

module.exports = {
    ComplainRequest
}