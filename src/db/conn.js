// const mongoose= require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/restapi")
// .then(()=>{
//     console.log("connection is successful") 
// }).catch((error)=>{
//     console.log("connection fail")
// })

const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/rest")
.then(()=>{
    console.log("connected successful")
}).catch((err)=>{
    console.log(err)
})