const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    const {username,email,password} = req.body
    // console.log("Inside register request");
    try{
        // check if email already exists
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already exists!!! Please Login...")
        }
        else{
            const newUser = new users({
                username,email,password,role:"guest",profile:"",phone:"",address:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.login = async(req,res)=>{
    const {email,password} = req.body
    // console.log("Inside Login Request");
    try{
        // check if email, password already exists
        const existingUser = await users.findOne({email,password})
        // console.log(existingUser);
        if(existingUser){
            // generate token using jwt
            const token = jwt.sign({userId:existingUser._id},process.env.jwt_secret)
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json("Invalid email/password")
        }
    }catch(err){
        res.status(401).json(err)
    }
}