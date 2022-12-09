const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  lastName: String,
  position: String,
  level: String,
  equipment: String,
  amount: String,
});

module.exports = mongoose.model("employees", employeeSchema);
