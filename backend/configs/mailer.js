import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const sendVerificationMail =(to,token,res)=>{
    const transport=nodemailer.createTransport({
        host:process.env.SMTP_SERVER,
        port:465,
        secure:true,
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.MAIL_PASSWORD
        }
    })

    const mailOptions={
        from:process.env.SMTP_MAIL,
        to:to,
        subject:"Triggers Assignment - Verfication Email",
        text:"http://localhost:5000/api/user/verify/?token="+token,
    }

    transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            res.send(err+info)
        }else{
            res.send("Register Success!.Mail was sent successfuly!")
        }
    })

}

export default sendVerificationMail
