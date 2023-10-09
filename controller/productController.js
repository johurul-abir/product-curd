
import { json } from "express";
import {getRandomId, createSlug} from "../helpers/helpers.js"
import fs from "fs";




//get all product show
export const getAllProduct = (req, res) => {

    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    if(productData.length === 0) {
        res.status(404).json({message:"Not funnd Product"})
        return;
    }
    res.status(200).json({product: productData});
};




//single product show
export const getSingleProduct = (req, res) =>{
    const {slug} = req.params;

    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    
    const singleProduct = productData.find((data) => data.slug === slug);

    if(!singleProduct) {
        res.status(404).json({message:"Not found single Product"})
        return;
    }
    res.status(200).json(singleProduct);
};



// create product
export const createProduct = (req, res) => {
    const { name, regulerPrice, salePrice, stock, color } = req.body;

    if(!name || !regulerPrice) {
        res.status(400).json({message: "Product Name and Price Required"})
        return;
    };


const productData = JSON.parse(fs.readFileSync("db/product.json").toString());


if(productData.some((data) => data.slug === createSlug(name)) ) {
    res.status(400).json({message: "This product name already axist"});
    return;
};

const product = {
    id:getRandomId(), name, regulerPrice, salePrice, stock, color, photo: req.file.filename, slug : createSlug(name)
};



productData.push(product);

fs.writeFileSync("db/product.json", JSON.stringify(productData));


res.redirect("/");

}


// delete product
export const deletePorducts = (req, res) => {
    const { id } = req.params;

    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    const deleteProduct = productData.filter((data) => data.id !== id);

    fs.writeFileSync("db/product.json", JSON.stringify(deleteProduct));

    res.redirect("/");
}



//update product
export const updateProduct = (req, res) => {
const {id} = req.params;
const { name, regulerPrice, salePrice, stock, color } = req.body;

//get all product data
const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

let updatePhoto = productData[productData.findIndex((data) => data.id === id)].photo
if(req?.file?.filename) {

    updatePhoto = req.file.filename;
}
productData[productData.findIndex((data) => data.id === id)] =
{
    id: id,
    slug: createSlug(name),
    name, regulerPrice, salePrice, stock, color, photo: updatePhoto
}
fs.writeFileSync("db/product.json", JSON.stringify(productData));

res.redirect("/");

}

