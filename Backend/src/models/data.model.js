const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    Price: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("data", dataSchema);
