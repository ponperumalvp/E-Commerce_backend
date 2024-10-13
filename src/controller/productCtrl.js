import productModel from "../model/productModel.js";
import userModel from "../model/userModel.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      color,
      category,
      desc,
      productInfo,
      image,
      price,
      refundPolicy,
      number,
      featured,
    } = req.body;
    console.log(req.body);
    // const product = await productModel.find({});
    const newProduct = new productModel({
      name: name,
      color: color,
      category: category,
      desc: desc,
      productInfo: productInfo,
      image: image,
      price: price,
      refundPolicy: refundPolicy,
      number: number,
      featured: featured,
    });
    console.log(newProduct);
    await newProduct.save();
    res.json({ message: "product created successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "internal error try again" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.json(product);
  } catch (err) {
    console.log(err);
    res.json({ message: "can't get product" });
  }
};
export const saveProduct = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const product = await productModel.findById(productId);
    const user = await userModel.findById(userId);

    user.savedProduct.push(product);
    await user.save();
    res.json({
      savedProduct: user.savedProduct,
      message: "product saved",
    });
  } catch (err) {
    console.log(err);
    res.json({ message: "Product not saved" });
  }
};
export const getSavedProduct = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    console.log("savedatas:", user);
    const savedProducts = await productModel.find({
      _id: { $in: user.savedProduct },
    });
    res.json({ savedProducts, message: "get saved data successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "can't get saved products" });
  }
};
// export const deleteSavedProduct = async (req, res) => {
//   try {
//     // Find the user by ID and update to pull the matching savedProduct
//     const user = await userModel.findByIdAndDelete(
//       req.params.userId,
//       { $pull: { savedProduct: req.params.id } },
//       { new: true } // To return the updated user document
//     );

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user); // Send back the updated user document
//   } catch (err) {
//     console.log("Error: " + err);
//     res.status(500).json({ message: "Internal error, please try again" });
//   }
// };
// export const deleteSavedProduct = async (req, res) => {
//   try {
//     const { productId, userId } = req.body;
//     console.log(userId);
//     const user = await userModel.findById(userId);
//     console.log("id", user);

//     // const deleteNote = await userModel.findOneAndDelete({
//     //   savedProduct: { $in: req.params.id },
//     // });
//     // res.json(deleteNote);
//     console.log(deleteNote);
//   } catch (err) {
//     console.log("get errMsg: " + err);
//     res.json({ message: "Internal error try again!" });
//   }
// };

// export const cartProduct = async (req, res) => {
//   try {
//     const { productId, userId, count } = req.body;
//     const product = await productModel.findById(productId);
//     const user = await userModel.findById(userId);

//     user.cartProduct.push(product, { count: count });
//     await user.save();
//     res.json({
//       cartProduct: user.cartProduct,
//       message: "product moved to cart",
//     });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: "Product is not moved to cart " });
//   }
// };
// export const getCartProduct = async (req, res) => {
//   try {
//     const user = await userModel.findById(req.params.userId);
//     console.log(user);
//     const cartProduct = await productModel.find({
//       _id: { $in: user.cartProduct },
//     });
//     res.json({ cartProduct, message: "get cart data successfully" });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: "can't get cart products" });
//   }
// };
