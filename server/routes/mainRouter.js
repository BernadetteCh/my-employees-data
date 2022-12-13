const express = require("express");
const router = express.Router();
const Employee = require("../db/employeeSchema");

router.get("/:name", async (req, res) => {
  // console.log(req.params.name);
  // console.log(req.params);
  //   console.log(req.params.name);
  await Employee.find({ firstName: { $regex: req.params.name } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});
module.exports = router;
