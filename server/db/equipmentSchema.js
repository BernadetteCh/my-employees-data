const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  name: String,
  type: String,
  amount: Number,
  comment: String,
});

module.exports = mongoose.model("equipment", equipmentSchema);
