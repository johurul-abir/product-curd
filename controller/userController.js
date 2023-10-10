import fs from "fs"
import {getRandomId, creatAlert} from "../helpers/helpers.js";
import { userMial } from "../mails/emai.js";

import nodemailer from "nodemailer"
import axios from "axios"
import dotenv from "dotenv";

dotenv.config();




// controllers
export const createUser = (req, res) => {
    res.status(201).json(req.body);
}





export const uploadUserPhoto = (req, res) => {
    res.status(200).json(req.body);
};

// create seller
export const addSellerConltroller = async(req, res) => {
    const {name, email, phone, location, product} = req.body;

    //name, phone and email vaidation
    if( !name || !email || !phone ) {
        res.status(400).json({message: "name, phone and email are must be Require"});
        return;

    };
    
    const sellerData = JSON.parse(fs.readFileSync("db/seller.json").toString());

    const seller = {id:getRandomId(), name, email, phone, location, product, photo: req.file.filename};



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
        to: `${email}`, // list of receivers
        subject: "studyhipe", // Subject line
        text:`Dear seller ${name} you are welcome in our team`, // plain text body
      });

      await axios.get( `http://bulksmsbd.net/api/smsapi?api_key=YecjLWwNfkfQjDREx7oh&type=text&number=(${phone})&senderid=8809617613062&message=(Dear seller+ ${name} +you  are welcome in our team)`)




    sellerData.push(seller);
    
    fs.writeFileSync("db/seller.json", JSON.stringify(sellerData));

   userMial(req, res);

    res.redirect("/seller");

}



//Show Single seller
 export const singleSeller =  (req, res) => {
    const {id} = req.params;
    const sellerData =  JSON.parse(fs.readFileSync("db/seller.json").toString());

    const singledata =  sellerData.find((data) => data.id === id);

    if(!singledata) {
        res.status(400).json({message: "not found Singgle Seller Data"});
        return;
    }

    res.status(200).json(singledata);

}



//delete seller
    export const deleteSeller = async(req, res) => {
         
        const {id} = req.params;
        
            const sellerData =  JSON.parse(fs.readFileSync("db/seller.json").toString());
            const findMail = sellerData.find((data) => data.id === id);
            
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
                to: `${findMail.email}`, // list of receivers
                subject: "studyhipe", // Subject line
                text:`Dear seller ${findMail.name} you not Active your job so you delete from our group`, // plain text body
              });

              await axios.get( `http://bulksmsbd.net/api/smsapi?api_key=YecjLWwNfkfQjDREx7oh&type=text&number=(${findMail.phone})&senderid=8809617613062&message=("you not Active your job so you delete from our group")`)
      

            const updateData = sellerData.filter((data)=> data.id !== id);
            fs.writeFileSync("db/seller.json", JSON.stringify(updateData));


            res.redirect("/seller");
          
    
}



//upDate seller
export const updateSeller = (req, res) => {
    const {id} =  req.params;
    const sellerData =  JSON.parse(fs.readFileSync("db/seller.json").toString());
    const oldSeller = sellerData.find((data) => data.id === id);
    console.log(oldSeller.email)
    
}

