import express from "express";
import {addCategory, updateCategory, deleteCategory, getAllCategory} from "../controller/category_controller.js"

const router = express.Router();

router.post("/add", addCategory);
router.put("/update/:id", updateCategory);//http://localhost:3000/categories/update/2

router.post("/delete/:id", deleteCategory);//http://localhost:3000/categories/delete/1

router.get("/all", getAllCategory);//http://localhost:3000/categories/all

export default router;