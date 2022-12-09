const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  lastName: String,
  position: String,
  level: String,
  equipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "equipment",
    required: true,
  },
  amount: String,
});

module.exports = mongoose.model("employees", employeeSchema);
