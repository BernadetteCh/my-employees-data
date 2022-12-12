const mongoose = require("mongoose");

const employeeAgeIncomeSchema = new mongoose.Schema({
  age: String,
  income: String,
});

module.exports = mongoose.model("ages", employeeAgeIncomeSchema);
