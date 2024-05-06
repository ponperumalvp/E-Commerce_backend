import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedProduct: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
  myProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
});

export default mongoose.model("Users", userSchema);
