const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");
const Equipment = require("../db/equipmentSchema");
const Position = require("../db/positionSchema");

router.get("/positions", (req, res) => {
  Position.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
});

module.exports = router;
