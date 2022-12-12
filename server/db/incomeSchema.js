const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  seniorDeveloper: Number,
  juniorDeveloper: Number,
  intern: Number,
});

module.exports = mongoose.model("income", incomeSchema);
