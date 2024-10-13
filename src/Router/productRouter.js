import {
  // cartProduct,
  createProduct,
  // deleteSavedProduct,
  // getCartProduct,
  getProduct,
  getSavedProduct,
  saveProduct,
} from "../controller/productCtrl.js";
import { verifyToken } from "../middleware/verifyToken.js";
import express from "express";

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProduct);
router.put("/saved", saveProduct);
router.get("/getSaved/:userId", getSavedProduct);
// router.delete("/deleteSaved", deleteSavedProduct);
// router.put("/cart", cartProduct);
// router.get("/getCart/:userId", getCartProduct);

export { router as productRouter };
