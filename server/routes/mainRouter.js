const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");
const Equipment = require("../db/equipmentSchema");

router.get("/showStatistic/:name", async (req, res) => {
  await Employee.find({ name: req.params.name, date: { $exists: true } }).then(
    (result) => {
      res.status(200).json(result);
    }
  );
});

module.exports = router;
