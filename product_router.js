import {addProduct, deleteProduct, getAllProduct, updateProduct} from "../controller/product_controller.js";
import express from "express";

const router = express.Router();

router.post("/add",addProduct);

router.delete("/delete/:id", deleteProduct);

router.get("/all",getAllProduct);

router.get("/update/:id", updateProduct);

export default router;