const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    userID:{
        type:String,
        required:true,
        unique:true
    }
})

const User=new mongoose.model("users",userSchema);

module.exports=User;