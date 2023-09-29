
import multer from "multer";


const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        if(file.fieldname === "userphoto"){
            cb(null, "public/user")
        }else if(file.fieldname === "productPhoto"){
            cb(null, "public/product")
        }    
    },
    filename: (req, file ,cb) => {
        cb(null, Date.now() + "_" + Math.round(Math.random()*100000) + "_" + file.originalname);
    }
});

export const userPhoto = multer({storage: storage}).single("userphoto");
export const productPhoto = multer({storage}).single("productPhoto")


