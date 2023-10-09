import express from "express";
import {showProductPage, showProductCreatePage, showSingleProductPage, editProduct, addSeller, showSeller,showSingleSellerPage } from "../controller/pageController.js"



// init router
const router = express.Router();



// use router

router.get("/", showProductPage);
router.get("/create", showProductCreatePage);
router.get("/single/:slug", showSingleProductPage);
router.get("/edit/:id", editProduct);
router.get("/addseller", addSeller);
router.get("/seller", showSeller);
router.get("/singleseller/:id", showSingleSellerPage)



// export router
 
export default router;