const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");

router.get("/", async (req, res) => {
  await Employee.find()
    .sort({ name: 1 })
    .then((result) => {
      res.status(200).json(result);
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

router.delete("/delete/:id", async (req, res) => {
  try {
    await Employee.findOneAndDelete({ _id: req.params.id });
    await Employee.find({}).then((result) => {
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
