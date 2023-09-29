import fs, { readFileSync } from "fs";
import path from "path";


//show product page
export const showProductPage = (req, res) => {
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

res.render("product",{product: productData});
};

export const showProductCreatePage = (req, res) => {
res.render("create")
};


export const showSingleProductPage = (req, res) => {
    const {slug} = req.params;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    const singleData = productData.find((data=> data.slug === slug))

  

res.render("single", { product: singleData});
}


export const editProduct = (req, res) => {
    const {id} = req.params;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    const editProductData = productData.find((data)=> data.id === id);
    res.render("edit", { product: editProductData })
}


