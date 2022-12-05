const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  name: String,
  type: String,
  amount: Number,
});

module.exports = mongoose.model("equipment", equipmentSchema);
