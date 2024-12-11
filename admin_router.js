import express from "express";
import { signIn, signUp } from "../controller/admin_controller.js";
import {body} from "express-validator";


const router = express.Router();// router object + routes define

// router.post("/sign-in", signIn);
//signIn and signUp are controller functions that handle the logic for signing in and signing up users.
router.post("/sign-in", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required")
], signIn);

router.post("/sign-up", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 6 }).withMessage("Password should be at least 6 characters"),
    body("username").notEmpty().withMessage("Username is required"),
], signUp);

export default router;