const User=require('../models/User');

//Register
exports.register=async(req,res)=>{
    try {
        const {username,email}=req.body;
        let userID="";
        const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
        while(true){
            for(let i=0;i<10;i++){
                userID+=chars.charAt(Math.floor(Math.random()*chars.length));
            }
            const user=await User.findOne({userID});
            if(!user) break;
            userID="";
        }
        const user=new User({username,email,userID});
        await user.save();
        res.status(201).json({message:"User created"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

//Login
exports.login=async(req,res)=>{
    try {
        const {userID}=req.body;
        const user=await User.findOne({userID});
        if(!user) return res.status(400).json({error:"User not found"});
        else res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}