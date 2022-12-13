const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");

router.get("/years-of-experience/:years", async (req, res) => {});

module.exports = router;
