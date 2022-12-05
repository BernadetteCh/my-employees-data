const express = require("express");
const router = express.Router();
const Equipment = require("../db/equipmentSchema");

router.get("/", async (req, res) => {
  await Equipment.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.put("/assignList", async (req, res) => {
  const newS = await Equipment.updateOne(
    { name: req.body.employee },
    { $set: { equipment: req.body.equipment } },
    { multi: true }
  );
  console.log(newS);
});
module.exports = router;
