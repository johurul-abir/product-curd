import fs from "fs"
import {getRandomId} from "../helpers/helpers.js"




// controllers
export const createUser = (req, res) => {
    res.status(201).json(req.body);
}


export const createInfo = (req, res) => {
    res.status(200).send("my name is johurul islam i am a customer of our company")
};


export const uploadUserPhoto = (req, res) => {
    res.status(200).json(req.body);
}


export const addSellerConltroller = (req, res) => {
    const {name, email, phone, location, product} = req.body;

    //name, phone and email vaidation
    if( !name || !email || !phone ) {
        res.status(400).json({message: "name, phone and email are must be Require"});
        return;
    };
    

    const sellerData = JSON.parse(fs.readFileSync("db/seller.json").toString());

    const seller = {id:getRandomId(), name, email, phone, location, product, photo: req.file.filename};

    sellerData.push(seller);
    
    fs.writeFileSync("db/seller.json", JSON.stringify(sellerData));




    res.redirect("/seller");

}




export const singleSeller = (req, res) => {
    const {id} = req.params;
    const sellerData =  JSON.parse(fs.readFileSync("db/seller.json").toString());

    const singledata =  sellerData.find((data) => data.id === id);

    if(!singledata) {
        res.status(400).json({message: "not found Singgle Seller Data"});
        return;
    }

    res.status(200).json(singledata);

}

