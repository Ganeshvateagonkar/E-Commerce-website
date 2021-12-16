import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//description :fetch all product
//GET request to api/products

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});
//description :fetch specific product
//GET request to api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getProducts, getProductById };
