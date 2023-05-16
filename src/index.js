// const express= require("express")
// const app=express();
// require("./db/conn")
// const Student=require("./models/studentModels")

// app.use(express.json())


// app.get("/",(req,res)=>{
//     res.send("Hello home page")
// })
// // create a new student
// app.post("/register",(req,res)=>{
//     console.log(req.body);
//     const user= new Student(req.body);
//     user.save().then(()=>{
//         res.send(user)
//     }).catch((err)=>{
//         res.send(err)
//     })
    
//     // res.send("hello fromnt the server")
// })







// app.listen(5500,()=>{
//     console.log("Listning at port")
// })


// // express.json() is a method inbuild in exp9ress to recoganize the incomming 
// // request Object as a JSON Object . This method is called a middleware
// // in this application using the code app.use (express.json());


const express=require("express")
const app=express();
const student=require("../src/models/studentModels");
const usersignup=require("../src/models/signup")

app.use(express.json())
require("../src/db/conn")
const authorization=require("./hash");
const signup = require("../src/models/signup");
// const jwt = require("jsonwebtoken")

app.get("/",(req,res)=>{
//    const request= req.headers["x-api-key"]
    // console.log(request)
    res.setHeader("jwttoken",authorization())
    res.send("hello world")
    
})
app.post("/register",(req,res)=>{
    console.log(req.body);
    console.log("successful")
    const user=new student(req.body).save().then(()=>{
        console.log("data insterd successfully")
        res.setHeader("jwttoken",authorization(req.body))   //ye linke doubt
        
        res.send(user)
        
    }).catch((err)=>{
        res.send(err)
    })
})
app.post ("/signup",(req,res)=>{
    console.log(req.body)
    const user= new usersignup(req.body).save().then(()=>{
        console.log("Signup data insterted successfylly")
        res.send(user)
        
    }).catch((err)=>{
        res.send(err  )
    })
})
app.post("/signin",(req,res)=>{
    console.log(req.body)
    const user= new usersignin(req.body).save().then(()=>{
        console.log("signin data successful")
        res.send(user)
        })
})
// function authorization(){
//     const token =jwt.sign({name:"chandan"},"jwtprivatekey");
//     console.log(token)
// }


app.listen(5500,()=>{
    console.log("listning at port 5500")
})



// user auth
// user schema username,email and password
// register and login
// register :take the new data and store it in mongodb
// check if email is alreay there send response as user already there
// login: fi email is matching or not password is matching
// getproduct:giving us list of product stored in db prodected 
