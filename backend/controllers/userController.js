import connectDB from '../configs/db.js';
import bcrypt from 'bcryptjs'
import sendMail from '../configs/mailer.js'



const db=connectDB();


//@des register user
//@route api/user/register
//@access public
export const registerUser=async(req,res)=>{

    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(req.body.password,salt);
    const token=await bcrypt.hash(req.body.email,salt);

    const values=[
        req.body.name,
        req.body.email,
        hashedPass,
        token
    ]

    const query="INSERT INTO user(Name,Email,Password,Token) VALUES(?)"

    db.query(query,[values],(err,data)=>{
        if(err){
            res.send(err);
        }else{
            //res.send("Register Success!")
            sendMail(req.body.email,req.body.name,token,res)
        }
        
    })
}



//@des login user
//@route api/user/login
//@access pulbic
export const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    const query="SELECT * FROM user WHERE Email=?"
    db.query(query,[email],async(err,data)=>{
        if(err){
            res.send(err);
            
        }else{
            if(data.length>0){
                if(await bcrypt.compare(password,data[0].Password)){
                    res.send("Login success!")
                }else{
                    res.send("Email Or Password Incorrect!")
                }
                
            }else{
                res.send("Email Or Password Incorrect!")
            }
            
        }
        
    })
}


//@des verify the user using the token link
//@route api/user/verify
//@access public
export const verifyUser=(req,res)=>{
    const token=req.query.token

    const query="SELECT * FROM user WHERE Token=?"

    db.query(query,[token],async(err,data)=>{
        if(err){
            res.send(err);
        }else{
            if(data.length>0){
                const verifyQuery="INSERT INTO verifiedusers(UserID) VALUES(?)"
                db.query(verifyQuery,[data[0].UserID],async(err,data)=>{
                    if(err){
                        res.send("Invalied link!")
                    }else{
                        res.send("Verified!")
                    }
                })
            }else{
                res.send("Invalied link!")
            }
            
        }
    })

}

//@des check the verification - is user verified his/her email or not
//@route api/user/check
//@access public
export const checkVerification=async(req,res)=>{
    const {email}=req.body;
    const query="SELECT * FROM user WHERE Email=?"
    db.query(query,[email],async(err,data)=>{
        if(err){
            res.send(err);
        }else{
            if(data.length>0){
                const query="SELECT * FROM user WHERE Email=? AND Token='Verified'"
                db.query(query,[email],async(err,data)=>{
                    if(data.length>0){
                        res.send("Login success!Verified")
                    }else{
                        res.send("Login success!Not Verified")
                    }
                })
                
            }else{
                res.send("Email Or Password Incorrect!")
            }
            
        }
        
    })
}