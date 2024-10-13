import express from "express";
import {
  cartProduct,
  deleteCartProduct,
  getCartProduct,
} from "../controller/cartCtrl.js";

const router = express.Router();

router.post("/", cartProduct);
router.get("/:userId", getCartProduct);
router.delete("/deleteCart/:id", deleteCartProduct);

export { router as cartRouter };
