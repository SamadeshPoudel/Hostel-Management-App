const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtPassword = '12345';
const {createUser} = require("../inputValidation")
const {User} = require("../userModel")

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

        const newUser = new User({username, email, password});
        await newUser.save();
        

        var token = jwt.sign({email: email}, jwtPassword);
        return res.json({msg:`Hey ${username}, welcome to Hostel-Management-App`,token});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal server error"})
    }
})

module.exports = router;