const express = require("express");
const router = express.Router();
const axios = require("axios");
const Product = require("../models/Product");

// GET /api/products
router.get("/", async (req, res) => {
  try {
    let products = await Product.find();

    // If no products exist, seed from Fake Store API
    if (products.length === 0) {
      console.log("Seeding products from Fake Store API...");

      const { data } = await axios.get("https://fakestoreapi.com/products?limit=8");

      const formatted = data.map((item) => ({
        name: item.title,
        price: item.price,
        image: item.image,
        fakestoreId: item.id,
      }));

      await Product.insertMany(formatted);
      products = await Product.find();
    }

    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ message: "Server error fetching products" });
  }
});

module.exports = router;
