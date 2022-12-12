const express = require("express");

const router = express.Router();
const Income = require("../db/incomeSchema");

router.get("/", async (req, res) => {
  await Income.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

module.exports = router;
