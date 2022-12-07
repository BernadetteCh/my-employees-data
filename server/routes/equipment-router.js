const express = require("express");
// const { model } = require("mongoose");
const router = express.Router();
const Equipment = require("../db/equipmentSchema");
// const Module = require("../db/equipmentSchema");
// const Equipment = Module.Equipment;
// const Employee = Module.Employee;

router.get("/", async (req, res) => {
  await Equipment.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.post("/create", async (req, res) => {
  const { name, type, amount } = req.body.inputValue;
  const newEquipment = new Equipment({
    name: name,
    type: type,
    amount: amount,
  });
  try {
    await newEquipment.save();
    res.status(200).json(newEquipment);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/assignList", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
