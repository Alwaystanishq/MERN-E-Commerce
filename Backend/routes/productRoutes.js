const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please Provide all fields" });
  }
  const newProduct = new productModel(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in creating Product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Product id" });
  }
  try {
    await productModel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting Product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allProducts = await productModel.find();
    res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    console.log("Error in getting all Product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
