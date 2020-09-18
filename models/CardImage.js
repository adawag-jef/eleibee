const mongoose = require("mongoose");

const CardImageSchema = new mongoose.Schema(
  {
    file_name: {
      type: String,
      required: true,
    },
    original_name: {
      type: String,
      required: true,
    },
    file_path: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CardImage", CardImageSchema);
