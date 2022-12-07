const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
// const Equipment = require("../db/equipmentSchema/Equipment");
const Module = require("../db/equipmentSchema");
const Equipment = Module.Equipment;
const Employee = Module.Employee;

router.get("/", async (req, res) => {
  await Equipment.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.put("/assignList", async (req, res) => {
  console.log(Employee);
  const employee = await Employee.find({ firstName: req.body.employee }).then(
    (result) => {
      return result[0];
    }
  );
  const equipment = await Equipment.find({
    type: req.body.equipment.type,
  }).then((result) => {
    result[0];
  });
  //   const newS = await Equipment.updateOne(
  //     { name: req.body.employee },
  //     { $set: { equipment: req.body.equipment } },
  //     { multi: true }
  //   );
  //   console.log(newS);
  // console.log(req.body);
});

module.exports = router;
