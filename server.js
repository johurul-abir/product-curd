import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js"
import productRouter from "./router/productRouter.js"
import pageRouter from "./router/pageRouter.js"
import EjsLayouts from "express-ejs-layouts"



//config 
dotenv.config();


//PORT settup
const PORT = process.env.PORT || 5050;


//init express
const app = express();



//middleware support
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//ejs settup
app.set("view engine", "ejs" );
app.use(EjsLayouts);


//static folder 
app.use(express.static("public"));

//use routers
app.use(userRouter);
app.use(productRouter);
app.use(pageRouter);


app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`.bgGreen.black);
})