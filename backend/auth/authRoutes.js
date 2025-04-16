const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtPassword = '12345';
const {createUser} = require("../inputValidation")
const {User} = require("../userModel")
const { v4: uuidv4 } = require('uuid'); // Importing the version 4 of uuid

router.post("/register",async (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const result = createUser.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({msg:"Input validation failed"})
    }

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:"User already exist with this email"})
        }

        // Generate a unique userId
        const userId = uuidv4();
        const newUser = new User({userId,username, email, password});
        await newUser.save();
        
        var token = jwt.sign({email: email, userId: userId}, jwtPassword);
        return res.json({msg:`Hey ${username}, welcome to Hostel-Management-App`,token});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal server error"})
    }
})

router.post("/login", async (req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

    if(!user || user.password !== password){
        return res.status(400).json({msg:"Invalid credentials"});
    }

    const token = jwt.sign({email:email, userId:user.userId}, jwtPassword);
    res.json({token});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal server error"})
    }
})

module.exports = router;