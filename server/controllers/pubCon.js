const User=require('../models/User');

//Register
exports.register=async(req,res)=>{
    try {
        const {username,email}=req.body;
        const user=await User.findOne({email});
        if(user){
            res.status(200).send(user.userID);
        }
        else{
            let userID="";
            const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            while(true){
                for(let i=0;i<10;i++){
                    userID+=chars.charAt(Math.floor(Math.random()*chars.length));
                }
                const exists=await User.findOne({userID});
                if(!exists) break;
                userID="";
            }
            const newUser=new User({username,email,userID});
            await newUser.save();
            res.status(201).send(userID);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

//Get Details
exports.getDetails=async(req,res)=>{
    try {
        const {userID}=req.params;
        const user=await User.findOne({userID});
        if(!user) return res.status(400).json({error:"User not found"});
        else res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}