const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const bcyrpt= require("bcrypt")
const employeeModel= require('./models/employee')

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1/employee")

app.listen(3010, ()=>{
    console.log("server is running")
})

app.post("/signup", (req,res)=>{
    const {name,email,pwd}= req.body
    bcyrpt.hash(pwd,10)
    .then(hash => {
        employeeModel.create({name,email,pwd:hash})
        .then(e => res.json(e))
        .catch(err => res.json(err))
    })
    .catch(err => console.log(err.message))

    // employeeModel.create(req.body)
    // .then(e => res.json(e))
    // .catch(err => res.json(err))
})

app.post("/login", (req,res)=>{
    const {email,pwd}= req.body 
    employeeModel.findOne({email: email})
    .then( user =>{
        if (user){
            bcyrpt.compare(pwd, user.pwd, (err, res)=> {   
                if (res) 
                    res.json("success")
                else res.json("incorrect password")
            })
        }
        else res.json("no record exist")
    })
})