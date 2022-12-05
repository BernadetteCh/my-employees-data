const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  lastName: String,
  position: String,
  level: String,
  equipment: {
    _id: String,
    name: String,
    type: String,
    amount: Number,
  },
});

module.exports = mongoose.model("employees", employeeSchema);
