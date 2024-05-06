import productModel from "../model/productModel.js";

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
    });
    console.log(newProduct);
    await newProduct.save();
    res.json({ message: "product created successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "internal error try again" });
  }
};
