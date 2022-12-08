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

router.get("/edit/equipment/:id", async (req, res) => {
  await Equipment.findById({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.put("/edit/equipment/:id", async (req, res) => {
  const { name, type, amount } = req.body.equipmentData;
  await Equipment.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: name,
        type: type,
        amount: amount,
      },
    }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
