const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    name: String,
    issue: String,
    roomNumber: Number
});

const ComplainRequest =  mongoose.model('ComplainRequests', complainSchema);

module.exports = {
    ComplainRequest
}