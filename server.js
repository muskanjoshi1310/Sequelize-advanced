import bodyParser from "body-parser"; //request body ko read + JSON aur URL-encoded data ko parse
import express from "express";
import AdminRouter from "./Router/admin_router.js";
import CategoryRouter from "./Router/category_router.js";
import ProductRouter from "./Router/product_router.js";


const app = new express();

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// app.use("/" ,( request,response)=>{
//     response.end("hello..");
// })

app.use("/admin",AdminRouter);
app.use("/categories", CategoryRouter);
app.use("/product",ProductRouter);


app.listen(709,() =>{

    
    console.log("Server started...");
});

//npm init
// npm install --> express sequelize mysql2 body-parser bcryptjs express-validator