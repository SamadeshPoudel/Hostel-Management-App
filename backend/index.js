const express = require("express");
const app = express();
app.listen(3000);

app.post("/create", (req, res)=>{
    //route to create requests from user

})

app.get("/", (req, res)=>{
    //route to read the request lists
    res.send("Hello engineer sir, How are you?")
    // console.log("Hey there")
})

app.put("/update", (req, res)=>{
    //route to update the requests
})

app.delete("/delete", (req, res)=>{
    //route to delete the requests
    
})