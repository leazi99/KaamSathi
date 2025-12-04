import express from "express";
import {
  Login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import authenticationToken from "../middleware/authentication.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(Login);
router.route("/logout").post(logout);
router.route("/profile/update").post(authenticationToken, updateProfile);

export default router;
