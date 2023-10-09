import fs, { readFileSync } from "fs";
import path from "path";



//show product page
export const showProductPage = (req, res) => {
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

res.render("product", {product: productData});

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


// add seller 
export const addSeller = (req, res) => {
    res.render("addseller");

}
 
//show seller
export const showSeller = (req, res ) => {
    
    const sellerData =  JSON.parse(fs.readFileSync("db/seller.json").toString());

    res.render("seller", {seller: sellerData});

}


//show single Seller information
export const showSingleSellerPage = (req, res) => {

    const {id} = req.params;
 
    const sellerData = JSON.parse(fs.readFileSync("db/seller.json").toString());
  
    const singleSellerData = sellerData.find((item) => item.id === id);
    res.render("singleseller", { seller: singleSellerData});
}

