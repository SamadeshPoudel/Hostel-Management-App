const express = require("express");
const app = express();
app.listen(3000);


//different post endpoints for different requests

app.post("/create/lunch", (req, res)=>{
    //route to create lunch requests from user
    const createPayload = req.body;
    // const parsePayload = 

})

app.post("/create/housekeeping", (req, res)=>{
    //route to create housekeeping requests from user
    const createPayload = req.body;
    // const parsePayload = 

})

app.post("/create/complain", (req, res)=>{
    //route to create complain requests from user
    const createPayload = req.body;
    // const parsePayload = 

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
