import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const sendVerificationMail = async (to,token,res)=>{
    const transport=nodemailer.createTransport({
        service:process.env.SMTP_SERVER,
        port:465,
        secure:true,
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.MAIL_PASSWORD
        }
    });

    const mailOptions={
        from:process.env.SMTP_MAIL,
        to:to,
        subject:"Triggers Assignment - Verfication Email",
        text:token,
    };

    try {
        await transport.sendMail(mailOptions);
        res.send("Mail was sent successfully!");
    } catch (err) {
        res.status(500).send("Error sending email: " + err.message);
    }
};

export default sendVerificationMail
