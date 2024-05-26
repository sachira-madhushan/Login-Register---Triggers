import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const sendVerificationMail =(to,token)=>{
    const transfort=nodemailer.createTransport({
        service:process.env.SMTP_SERVER,
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
        text:"Mail",
    }
}

