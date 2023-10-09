
import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();
//import axios from "axios"


export const userMial = async (req, res) => {
    // setup email transporter//
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_ADDRESS,
          pass: process.env.MAIL_PASS,
        },
      });
    
      await transporter.sendMail({
        from: `studyhipe <${process.env.MAIL_ADDRESS}>` , // sender address
        to: "mdjohurulislam000@gmail.com", // list of receivers
        subject: "studyhipe", // Subject line
        text: "welcome to Studyhipe learning plateforme", // plain text body
      },(error, info)=> {
        if(error){
          console.log(error)
        } else{
          console.log(info)
        };
         
      });

      // await axios.get( `http://bulksmsbd.net/api/smsapi?api_key=YecjLWwNfkfQjDREx7oh&type=text&number=(${req.body.cell})&senderid=8809617613062&message=(${req.body.text})`)
      // res.status(200).json(req.body);
    }