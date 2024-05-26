import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import hbs from 'nodemailer-express-handlebars';
import path from 'path'

dotenv.config();

const sendVerificationMail =(to,name,token,res)=>{
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
        template: 'verifyEmail',
        context: {
            name:name,
            token:token,
        },
    }

    const handlebarOptions = {
        viewEngine: {
          partialsDir: path.resolve('../backend/models/'),
          defaultLayout: false,
        },
        viewPath: path.resolve('../backend/models/'),
        extName: '.html',
      };

    transport.use('compile', hbs(handlebarOptions));

    transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            res.send(err+info)
        }else{
            res.send("Register Success!.Mail was sent successfuly!")
        }
    })

}

export default sendVerificationMail
