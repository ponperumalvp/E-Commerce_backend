import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  productInfo: { type: String, required: true },
  image: { type: String },
  price: { type: Number, required: true },
  refundPolicy: { type: String, required: true },
  // userOwner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Users",
  //   required: true,
  // },
});

export default mongoose.model("Products", productSchema);
