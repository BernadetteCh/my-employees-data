const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");

router.get("/", async (req, res) => {
  await Employee.find()
    .sort({ name: 1 })
    .lean()
    .then((result) => {
      res.status(200).send(result);
    });
});

router.post("/save/newemployee", async (req, res) => {
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
