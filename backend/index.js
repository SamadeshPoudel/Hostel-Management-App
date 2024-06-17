const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json())
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://poudelsamadesh:pkAV2UBUH6vQkuBS@cluster1-hostel-managem.3cxkcsp.mongodb.net/Hostel-Management-App")
const {createLunchReq,
    createHousekeepingReq,
    createComplainReq,
    updateLunchReq,
    updateHousekeepingReq,
    updateComplainReq} = require("./inputValidation")

const {LunchRequest} = require("./lunchModel")
const {HousekeepingRequest} = require("./housekeepingModel");
const { ComplainRequest } = require("./complainModel");


//different post endpoints for different requests

app.post("/create/lunch", async (req, res)=>{
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

app.post("/create/housekeeping",async (req, res)=>{
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

app.post("/create/complain",async (req, res)=>{
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

app.get("/requests/lunch", (req, res)=>{
    //route to get all the lunch requests
    
})

app.get("/requests/housekeeping", (req, res)=>{
    //route to get all the housekeeping requests
    
})

app.get("/requests/complains", (req, res)=>{
    //route to get all the complains filed by you
    
})

//DIFFERENT PUT ENDPOINTS FOR 3 DIFFERENT REQUESTS

app.put("/update/lunch/:id", (req, res)=>{
    //route to update the lunch requests
})

app.put("/update/housekeeping/:id", (req, res)=>{
    //route to update the housekeeping requests
})

app.put("/update/complains/:id", (req, res)=>{
    //route to update the complains 
})


//DIFFERENT DELETE ENDPOINTS FOR 3 DIFFERENT REQUESTS

app.delete("/delete/lunch/:id", (req, res)=>{
    //route to delete the lunch requests
    
})

app.delete("/delete/housekeeping/:id", (req, res)=>{
    //route to delete the housekeeping requests
    
})

app.delete("/delete/complains/:id", (req, res)=>{
    //route to delete the complains requests
    
})
