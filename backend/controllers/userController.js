import connectDB from '../configs/db.js';
import bcrypt from 'bcryptjs'

const db=connectDB();

export const registerUser=async(req,res)=>{

    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(req.body.password,salt);

    const values=[
        req.body.name,
        req.body.email,
        hashedPass
    ]
    const query="INSERT INTO user(Name,Email,Password) VALUES(?);"

    db.query(query,[values],(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send("Register Success!")
        }
        
    })
}

export const loginUser=(req,res)=>{
    res.send("Login");
}

export const verifyUser=(req,res)=>{
    res.send("Verified");
}