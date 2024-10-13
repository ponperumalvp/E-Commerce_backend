import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./src/Router/userRouter.js";
import { productRouter } from "./src/Router/productRouter.js";
import { cartRouter } from "./src/Router/cartRouter.js";

dotenv.config();
const app = express();

//middelware

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);
const port = process.env.PORT;
const url = process.env.MONGODB_URL;

const connectDb = mongoose
  .connect(url)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("not able to connect" + err);
  });

app.use("/users", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.listen(port, () => {
  //   connectDB();
  console.log(`"server listening at" + ${port}`);
});
