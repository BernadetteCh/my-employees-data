const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  name: String,
  salary: String,
  overbudget: String,
});

module.exports = mongoose.model("positions", positionSchema);
