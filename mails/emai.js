
import nodemailer from "nodemailer"
import axios from "axios"


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
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
      });
      await axios.get( `http://bulksmsbd.net/api/smsapi?api_key=YecjLWwNfkfQjDREx7oh&type=text&number=(${req.body.cell})&senderid=8809617613062&message=(${req.body.text})`)
      res.status(200).json(req.body);
    }