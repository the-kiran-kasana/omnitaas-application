const express = require("express")
const userModel = require("../models/UserSchema")
const jwt = require("jsonwebtoken");
const SECRET = "SHHHH";

const authRouter = express.router();

authRouter.post("/api/login", async (req, res) => {
    const {username , password} = req.body;
    const user = await userModel.findOne({username , password})

    if(!user){
       return res.status(401).json({message : "not found"})
    }

    res.status(200).json({message : "login successfully"})

})

export.modules = authRouter;