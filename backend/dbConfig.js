const mongoose = require('mongoose');

async function connectDB() {
    try {
        // await mongoose.connect("mongodb+srv://poudelsamadesh:pkAV2UBUH6vQkuBS@cluster1-hostel-managem.3cxkcsp.mongodb.net/");
        await mongoose.connect("mongodb+srv://poudelsamadesh:pkAV2UBUH6vQkuBS@cluster1-hostel-managem.3cxkcsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1-Hostel-Management")
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;