const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");
const Equipment = require("../db/equipmentSchema");

router.get("/years-of-experience/:years", async (req, res) => {
  await Employee.find({ years: [req.params.years] })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
});

module.exports = router;
