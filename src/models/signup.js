const mongoose = require ("mongoose")
const Schema= mongoose.Schema

const signupSchema= new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const signupModel= mongoose.model("signup",signupSchema)

const signinSchema =new Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const signinModel=mongoose.model("signin",signinSchema)

module.exports={signupModel,signinModel}