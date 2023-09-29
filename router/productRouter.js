import express from "express";
import {createProduct, getAllProduct, deletePorducts, getSingleProduct, updateProduct} from "../controller/productController.js"
import {productPhoto} from "../utlities/multer.js"


//init router
const router = express.Router();



//product Routes
router.post("/product", productPhoto, createProduct);
router.get("/product", getAllProduct);
router.get("/product/:slug", getSingleProduct);
router.get("/delete/:id", deletePorducts);
router.post("/update/:id", productPhoto, updateProduct)





// export router
export default router;