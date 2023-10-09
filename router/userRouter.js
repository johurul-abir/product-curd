import express from "express";
import {createUser, createInfo , uploadUserPhoto, addSellerConltroller, singleSeller} from "../controller/userController.js";
import {userMial} from "../mails/emai.js"
import {userPhoto, sellerPhoto} from "../utlities/multer.js"


//init router
const router = express.Router();



// routers
router.post("/user", createUser);
router.get("/user", createInfo);
router.post("/mail", userMial);
router.post("/userprofile", userPhoto, uploadUserPhoto);
router.post("/addseller", sellerPhoto, addSellerConltroller);
router.get("singleseller/:id", singleSeller );



// export default
export default router;