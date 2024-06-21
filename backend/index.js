const express = require("express");
const app = express();
app.use(express.json())
const connectDB = require('./dbConfig');
// Connect to MongoDB
connectDB();

const {createLunchReq,
    createHousekeepingReq,
    createComplainReq,
    updateLunchReq,
    updateHousekeepingReq,
    updateComplainReq} = require("./inputValidation")

const {LunchRequest} = require("./lunchModel")
const {HousekeepingRequest} = require("./housekeepingModel");
const { ComplainRequest } = require("./complainModel");
app.listen(3000);


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

app.get("/requests/lunch", async (req, res)=>{
    //route to get all the lunch requests
    const lunchReq = await LunchRequest.find();
    res.json({
        lunchReq
    })

})

app.get("/requests/housekeeping",async (req, res)=>{
    //route to get all the housekeeping requests
    const housekeepingReq = await HousekeepingRequest.find();
    res.json({
        housekeepingReq
    })
    
})

app.get("/requests/complains", async (req, res)=>{
    //route to get all the complains filed by you
    const complainReq = await ComplainRequest.find();
    res.json({
        complainReq
    })
    
})

//DIFFERENT PUT ENDPOINTS FOR 3 DIFFERENT REQUESTS

app.put("/update/lunch/:id", async (req, res)=>{
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

app.put("/update/housekeeping/:id", async (req, res)=>{
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

app.put("/update/complains/:id",async (req, res)=>{
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

app.delete("/delete/lunch/:id", (req, res)=>{
    //route to delete the lunch requests
    
})

app.delete("/delete/housekeeping/:id", (req, res)=>{
    //route to delete the housekeeping requests
    
})

app.delete("/delete/complains/:id", (req, res)=>{
    //route to delete the complains requests
    
})
