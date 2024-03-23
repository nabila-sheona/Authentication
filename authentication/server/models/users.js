const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({

    name: String,
    email: String,
    password:String
})
//sheona-nabila

const UserModel= mongoose.model("signup", UserSchema)

module.exports=UserModel

