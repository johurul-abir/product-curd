import express from "express";
import {createUser, createInfo , uploadUserPhoto} from "../controller/userController.js";
import {userMial} from "../mails/emai.js"
import {userPhoto} from "../utlities/multer.js"


//init router
const router = express.Router();



// routers
router.post("/user", createUser);
router.get("/user", createInfo);
router.post("/mail", userMial);
router.post("/userprofile", userPhoto, uploadUserPhoto);



// export default
export default router;