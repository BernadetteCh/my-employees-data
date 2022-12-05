const express = require("express");
const router = express.Router();
const Equipment = require("../db/equipmentSchema");

router.get("/", async (req, res) => {
  await Equipment.find()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});
module.exports = router;
