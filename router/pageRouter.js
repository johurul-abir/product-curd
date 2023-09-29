import express from "express";
import {showProductPage, showProductCreatePage, showSingleProductPage, editProduct} from "../controller/pageController.js"



// init router
const router = express.Router();



// use router

router.get("/", showProductPage);
router.get("/create", showProductCreatePage);
router.get("/single/:slug", showSingleProductPage);
router.get("/edit/:id", editProduct)



// export router
 
export default router;