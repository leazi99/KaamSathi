import express from "express";

import authenticationToken from "../middleware/authentication.js";
import {
  getAllCompanies,
  getCompanyBYId,
  registerCompany,
  updateCompanyByid,
} from "../controllers/company.controller.js";
const router = express.Router();

router.route("/register").post(authenticationToken, registerCompany);
router.route("/get/:id").get(authenticationToken, getAllCompanies);
router.route("/get/:id").get(authenticationToken, getCompanyBYId);
router.route("/update/:id").put(authenticationToken, updateCompanyByid);

export default router;
