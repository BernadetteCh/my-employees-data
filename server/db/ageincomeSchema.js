const mongoose = require("mongoose");

const ageincomeSchema = new mongoose.Schema({
  age: "String",
  income: "String",
});

module.exports = mongoose.model("income", ageincomeSchema);
