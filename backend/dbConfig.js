require("dotenv").config();
const mongoose = require('mongoose');
async function connectDB() {
    try {
        //below line stores in the hostel-management-app db
        // await mongoose.connect("mongodb+srv://poudelsamadesh:pkAV2UBUH6vQkuBS@cluster1-hostel-managem.3cxkcsp.mongodb.net/Hostel-Management-App");
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;