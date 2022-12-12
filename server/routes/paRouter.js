const express = require("express");
const router = express.Router();
const IncomeAge = require("../db/employeeIncomeAge");

router.get("/", async (req, res) => {
  // await IncomeAge.find({})
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((error) => {
  //     res.status(400).json({ error });
  //   });
});

module.exports = router;
