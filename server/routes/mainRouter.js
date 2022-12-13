const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");
const Equipment = require("../db/equipmentSchema");

router.get("/years-of-experience/:years", async (req, res) => {});

module.exports = router;
