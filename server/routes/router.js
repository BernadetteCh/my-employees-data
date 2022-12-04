const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");

router.post("/", async (req, res) => {
  const { name, position, level } = req.body.inputValue;
  const newEmployee = new Employee({
    name: name,
    position: position,
    level: level,
  });
  try {
    await newEmployee.save();
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
