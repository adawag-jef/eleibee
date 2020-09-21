const mongoose = require("mongoose");

const CardCollectionSchema = new mongoose.Schema(
  {
    image: { type: mongoose.Schema.Types.ObjectId, ref: "CardImage" },
    price: { type: String, required: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CardCollection", CardCollectionSchema);
