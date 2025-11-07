const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      
      type: Number,
      required: true,
      set: (v) => Math.round(v),
    },
    image: {
      type: String,
      default: "",
    },
    fakestoreId: {
      type: Number,
      default: null, // helps avoid duplicates from Fake Store API
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
