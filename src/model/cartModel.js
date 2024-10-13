import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  cartProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  count: { type: Number, required: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

export default mongoose.model("Carts", cartSchema);
