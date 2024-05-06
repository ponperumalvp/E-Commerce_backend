import { createProduct } from "../controller/productCtrl.js";
import { verifyToken } from "../middleware/verifyToken.js";
import express from "express";

const router = express.Router();

router.post("/create", createProduct);
// router.get("/", getProducts);
// router.get("/product/:id", getProduct);
// router.delete("/product/:id", deleteProduct);
// router.put("/product/:id", updateProduct);

export { router as productRouter };
