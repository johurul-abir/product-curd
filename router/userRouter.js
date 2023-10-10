import express from "express";
import {createUser , uploadUserPhoto, addSellerConltroller, singleSeller, deleteSeller, updateSeller} from "../controller/userController.js";
import {userMial} from "../mails/emai.js"
import {userPhoto, sellerPhoto} from "../utlities/multer.js"


//init router
const router = express.Router();



// routers
router.get("/deleteseller/:id", deleteSeller)
router.post("/user", createUser);
router.post("/mail", userMial);
router.post("/userprofile", userPhoto, uploadUserPhoto);
router.post("/addseller", sellerPhoto, addSellerConltroller);
router.get("singleseller/:id", singleSeller );
router.get("/updateseller/:id", updateSeller);



// export default
export default router;