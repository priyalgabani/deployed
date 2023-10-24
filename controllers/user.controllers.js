const passport = require("passport")
const passports = require("../models/user.schema")

const home =(req , res)=>{
    res.render("index")
}
const login =(req , res)=>{
    res.render("login")
    
}
const signup = (req , res)=>{
    res.render("register")
}

const signdata = async (req,res)=>{

    try {
        let data = await passports.findOne({email: req.body.email});

        if (data){
            return res.send("User alreasy exist")
        }
        else{
            let data = await passports.create(req.body);
            return res.send(data);
        }
    } catch (error) {
        return res.send(error.message)
    }
}

const logindata = async (req,res)=>{
    try {
        let data = await passports.findOne({email : req.body.email})
        if (!data){
            return res.send("user not exit")
        }
        if(data.password !== req.body.password){
            return res.send("Passowrd is incorrect")
        }

        return res.cookie("id", data.id).send("Logged In Successfully")
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = {home , login , signup , signdata , logindata }