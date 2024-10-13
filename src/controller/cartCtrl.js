import cartModel from "../model/cartModel.js";
import productModel from "../model/productModel.js";
import userModel from "../model/userModel.js";
export const cartProduct = async (req, res) => {
  try {
    const { productId, userId, count, name, image, price } = req.body;

    const product = await cartModel.findOne({ cartProduct: productId });
    // if (product) {
    //   return res.json({ message: "Already Exist" });
    // }

    const addCart = new cartModel({
      cartProduct: productId,
      userOwner: userId,
      count: count,
      name: name,
      image: image,
      price: price,
    });
    await addCart.save();

    res.json({
      addCart: addCart,
      message: "product moved to cart",
    });
  } catch (err) {
    console.log(err);
    res.json({ message: "Product is not moved to cart " });
  }
};
export const getCartProduct = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    const cartProducts = await cartModel.find({
      userOwner: { $in: user._id },
    });

    res.json({
      cartProducts,
      message: "get cart data successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({ message: "can't get cart products" });
  }
};

export const deleteCartProduct = async (req, res) => {
  try {
    const user = await cartModel.findById(req.params.userId);
    console.log("id", user);

    const deleteNote = await cartModel.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(deleteNote);
    console.log(deleteNote);
  } catch (err) {
    console.log("get errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
