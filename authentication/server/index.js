//
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel=require('./models/users')

const app= express()
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/user")

app.post('/login', (req,res)=>{
    const{email, password}=req.body;
    UserModel.findOne({email:email})
    .then(person=>{
        if(person){
        if(person.password===password){
            res.json("success")
        } else{
            res.json("incoorect password")
        }
    } else {
        res.json("no record exists")
    }
    })
})

app.post('/signup', (req,res)=>{
    UserModel.create(req.body)
    .then(signup=>res.json(signup))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=> {
    console.log("server is running")
})