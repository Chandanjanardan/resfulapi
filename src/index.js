const express= require("express")
const app=express();
require("./db/conn")
const Student=require("./models/studentModels")

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello home page")
})
// create a new student
app.post("/students",(req,res)=>{
    console.log(req.body)
    
    res.send("hello fromnt the server")
})







app.listen(5500,()=>{
    console.log("Listning at port")
})


// express.json() is a method inbuild in exp9ress to recoganize the incomming 
// request Object as a JSON Object . This method is called a middleware
// in this application using the code app.use (express.json());