const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  level: String,
});

module.exports = mongoose.model("employees", employeeSchema);
