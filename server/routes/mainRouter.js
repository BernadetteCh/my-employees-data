const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");
const Equipment = require("../db/equipmentSchema");

router.get("/years-of-experience/:years", (req, res) => {
  const id = parseInt(req.params.years);
  if (id < 0) {
    res.status(404).send("Invalid message");
  } else {
    Employee.find({ years: [req.params.years] }).then((result) => {
      res.status(200).json(result);
    });
  }
});

module.exports = router;
