const  User = require("../model/user.model");
const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken")

const userSignUp = async (req, res) =>{
    const {firstName, lastName, email, password} = req.body
    try {
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(409).json({
                message:"Email already Exist"
            })
        }
        const salt =10
        const hashedPassword =await bcrypt.hash(password, salt);
        const newUser = await User.create({
            firstName,lastName,email, password :hashedPassword
            });
            return res.status(201).json({
                message:"Account successfully created",
                data:newUser
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}

// login
const userLogin = async (req, res) => {
    const {email, password} =req.body
    try {
    const userExistInDb = await User.findOne({email})
    if(!userExistInDb){
        return res.status(403).json({
            error:"Not found"
        })
    } 
    const isMatchedPassword =await bcrypt.compare(password, userExistInDb.password)
    if (!isMatchedPassword){
        return res.status(401).json({
            message:"Invalid Credential"
        })
    }
    const token = await jwt.sign({
        email:userExistInDb.email,
        _id: userExistInDb._id,
        firstName: userExistInDb.firstName
    }, process.env.JWT_SECRET,
    {
        expiresIn: "5m",
    }
    )
    res.cookie("access_token", token, {
        expires: new Date(Date.now()   +   30000),
        httpOny: true
    })
        return res.status(202).json({
            message:"Login Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}

//Endpoint logout

const userLogout = async (req, res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json("logout Successfully")
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })   
    }
}

module.exports = {
    userSignUp,
    userLogin,
    userLogout
}