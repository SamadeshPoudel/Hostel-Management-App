const express = require("express");
const app = express();
app.use(express.json())
const connectDB = require('./dbConfig');
// Connect to MongoDB
connectDB();
const jwt = require("jsonwebtoken");
const jwtPassword = '12345';

const authRoutes = require('./auth/authRoutes');
app.use('/', authRoutes);

const {createLunchReq,
    createHousekeepingReq,
    createComplainReq,
    createUser,
    updateLunchReq,
    updateHousekeepingReq,
    updateComplainReq} = require("./inputValidation")

const {LunchRequest} = require("./lunchModel")
const {HousekeepingRequest} = require("./housekeepingModel");
const { ComplainRequest } = require("./complainModel");
app.listen(3000);

//AUTHENTICATION MIDDLEWARE
const authenticate = (req, res, next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.json({msg:"Access denied: No token found"})
    }
    try {
        const verified = jwt.verify(token, jwtPassword);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send("Invalid token")
    }
}

//different post endpoints for different requests

app.post("/create/lunch",authenticate, async (req, res)=>{
    //route to create lunch requests from user
    let createPayload = req.body;
    const parsePayload = createLunchReq.safeParse(createPayload);
     if(!parsePayload){
        res.status(401).json({
            msg:"Input validation failed"
        })
        return;
     }


     await LunchRequest.create({
        name: createPayload.name,
        college: createPayload.college,
        phoneNumber: createPayload.phoneNumber
     })
     res.json({
        msg: "Lunch Request created successfully"
     })

})

app.post("/create/housekeeping",authenticate,async (req, res)=>{
    //route to create housekeeping requests from user
    let createPayload = req.body;
    const parsePayload = createHousekeepingReq.safeParse(createPayload);
     if(!parsePayload){
        res.status(401).json({
            msg:"Input validation failed"
        })
        return;
     }


     await HousekeepingRequest.create({
        name: createPayload.name,
        roomNumber: createPayload.roomNumber,
     })
     res.json({
        msg: "HouseKeeping Request created successfully"
     })

})

app.post("/create/complain",authenticate,async (req, res)=>{
    //route to create complain requests from user
    let createPayload = req.body;
    const parsePayload = createComplainReq.safeParse(createPayload);
     if(!parsePayload){
        res.status(401).json({
            msg:"Input validation failed"
        })
        return;
     }


     await ComplainRequest.create({
        name: createPayload.name,
        issue: createPayload.issue,
        roomNumber: createPayload.roomNumber,
     })
     res.json({
        msg: "Complain registered successfully"
     })

})

//DIFFERENT GET ENDPOINTS FOR GETTING THREE DIFFERENT REQUESTS 

app.get("/requests/lunch",authenticate, async (req, res)=>{
    //route to get all the lunch requests
    const lunchReq = await LunchRequest.find();
    res.json({
        lunchReq
    })
})

app.get("/requests/housekeeping",authenticate,async (req, res)=>{
    //route to get all the housekeeping requests
    const housekeepingReq = await HousekeepingRequest.find();
    res.json({
        housekeepingReq
    })
    
})

app.get("/requests/complains",authenticate, async (req, res)=>{
    //route to get all the complains filed by you
    const complainReq = await ComplainRequest.find();
    res.json({
        complainReq
    })
    
})

//DIFFERENT PUT ENDPOINTS FOR 3 DIFFERENT REQUESTS

app.put("/update/lunch/:id",authenticate, async (req, res)=>{
    //route to update the lunch requests
    const {id}= req.params;
    const updatePayload = req.body;
    const parsePayload = updateLunchReq.safeParse(updatePayload);

    if (!parsePayload.success){
        console.log(parsePayload.error); //just to log the error
        return res.json({ msg: "Input validation failed" });
    }

    try{
        const updatedLunch = await LunchRequest.findByIdAndUpdate(id, updatePayload, {new : true });

        if(!updatedLunch){
            return res.status(404).json({msg: "No lunch request found with this id"})
        }

        res.json({
            msg: "Lunch Request updated successfully",
            updatedLunch
        });
    } catch (err){
        res.status(500).json({msg:"Server error"})
    }
    
})

app.put("/update/housekeeping/:id",authenticate, async (req, res)=>{
    //route to update the housekeeping requests
    const {id} = req.params;
    const updatePayload = req.body;
    const parsePayload = updateHousekeepingReq.safeParse(updatePayload);

    if(!parsePayload.success){
        return res.json({
            msg: "Input validation failed"
        })
    }
    try{
        const updatedHousekeeping = await HousekeepingRequest.findByIdAndUpdate(id, updatePayload, {new: true});

        if(!updatedHousekeeping){
            return res.status(404).json({
                msg: "No housekeeping request found with this id"
            })
        }

        res.json({
            msg: "HouseKeeping request successfully added",
            updatedHousekeeping
        })
    }catch(err){
        res.status(500).json({msg: "Server error"})
    }
})

app.put("/update/complains/:id",authenticate,async (req, res)=>{
    //route to update the complains 
    const {id} = req.params;
    const updatePayload = req.body;
    const parsePayload = updateComplainReq.safeParse(updatePayload);

    if(!parsePayload.success){
        console.log(parsePayload.error);
        return res.json({msg: "Input validation failed"})
    }

    try {
        const updatedComplain = await ComplainRequest.findByIdAndUpdate(id, updatePayload, {new: true});

        if(!updatedComplain){
            return res.status(404).json({msg: "No complains request found by this id"})
        }

        res.json({
            msg: "Complain request updated successfully",
            updatedComplain
        })
        
    } catch (error) {
        res.status(500).json({msg: "Internal server error"})
    }
})


//DIFFERENT DELETE ENDPOINTS FOR 3 DIFFERENT REQUESTS

app.delete("/delete/lunch/:id",authenticate, async (req, res)=>{
    //route to delete the lunch requests
    const {id} = req.params;
    try {
        await LunchRequest.findByIdAndDelete(id);

        res.status(200).json({msg:"Lunch request deleted successfully"})

    } catch (error) {
        res.status(500).json({msg:"Error deleting lunch request"})
    }
    
})

app.delete("/delete/housekeeping/:id",authenticate, async (req, res)=>{
    //route to delete the housekeeping requests
    const {id} = req.params;
    try {
        await HousekeepingRequest.findByIdAndDelete(id);
        res.status(200).json({msg:"Housekeeping request successfully deleted"})
    } catch (error) {
        res.status(500).json({msg:"Error deleting housekeeping request"})
    }
    
})

app.delete("/delete/complains/:id",authenticate,async (req, res)=>{
    //route to delete the complains requests
    const {id} = req.params;
    try {
        await ComplainRequest.findByIdAndDelete(id);
        res.status(200).json({msg:"Complain request successfully deleted"})
    } catch (error) {
        res.status(500).json({msg:"Error deleting complain request"})
    }
    
})
