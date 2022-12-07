const mongoose = require("mongoose");
const employeeSchema = require("../db/employeeSchema");

const equipmentSchema = new mongoose.Schema({
  name: String,
  type: String,
  amount: Number,
});

// const Employee = employeeSchema;
// const Equipment = mongoose.model("equipment", equipmentSchema);
module.exports = mongoose.model("equipment", equipmentSchema);
// module.exports = { Employee, Equipment };
