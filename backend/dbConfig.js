require("dotenv").config();
const mongoose = require('mongoose');
async function connectDB() {
    try {
        // await mongoose.connect("mongodb+srv://poudelsamadesh:pkAV2UBUH6vQkuBS@cluster1-hostel-managem.3cxkcsp.mongodb.net/");
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;