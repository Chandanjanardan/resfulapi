const mongoose=require("mongoose")
const validator= require("validator")

const Schema= mongoose.Schema;

const studentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is persent "],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email")
            }
        }
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },address:{
        type:String,
        required:true
    }
})

const Student= new mongoose.model("student",studentSchema)

module.exports=Student;