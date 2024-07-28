import express from "express";
import { login, logout, signup } from "../controller/user.controller.js";
// yaha pe signup {} main hai which means in user.controller there are more api and we are calling the specific exported api which is named as signup there

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;