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

router.post("/create", async (req, res) => {
  const { name, type, amount } = req.body.inputValue;
  const newEquipment = new Equipment({
    name: name,
    type: type,
    amount: amount,
  });
  try {
    await newEquipment.save();
    res.status(200).json(newEquipment);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/upDateEquipment/createEmployee", async (req, res) => {
  const equipment = await Equipment.findById({ _id: req.body.equipment }).then(
    (equipment) => {
      let sum = parseInt(equipment.amount) - parseInt(req.body.amount);
      equipment.amount = sum;
      return equipment;
    }
  );

  await Equipment.findByIdAndUpdate(
    { _id: req.body.equipment },
    { $set: { amount: equipment.amount } }
  );
  await Equipment.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
});

router.put("/updateEquipment/deleteEmployee", async (req, res) => {
  let sum =
    parseInt(req.body.amountOfEmployee) + parseInt(req.body.equipment.amount);
  await Equipment.findOneAndUpdate(
    { _id: req.body.equipment._id },
    { $set: { amount: sum } }
  );
  await Equipment.find({}).then((result) => {
    res.status(200).json(result);
  });
});

router.get("/edit/equipment/:id", async (req, res) => {
  await Equipment.findById({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});
router.get("/sort/:key/:method", async (req, res) => {
  if (req.params.method === "ascending") {
    await Equipment.find()
      .sort({ [req.params.key]: 1 })
      .then((result) => {
        res.status(200).json(result);
      });
  } else if (req.params.method === "descending") {
    await Equipment.find()
      .sort({ [req.params.key]: -1 })
      .then((result) => {
        res.status(200).json(result);
      });
  } else {
    await Equipment.find().then((result) => {
      res.json(result);
    });
  }
});

router.put("/edit/equipment/:id", async (req, res) => {
  const { name, type, amount } = req.body.equipmentData;
  await Equipment.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: name,
        type: type,
        amount: amount,
      },
    }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.post("/filter/:filterValue", async (req, res) => {
  await Equipment.find({
    [req.params.filterValue]: { $regex: req.body.inputValue },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});
router.delete("/delete/:id", async (req, res) => {
  await Equipment.findByIdAndDelete({ _id: req.params.id });
  await Equipment.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
