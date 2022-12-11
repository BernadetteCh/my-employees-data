const express = require("express");
// const { db } = require("../db/employeeSchema");
const router = express.Router();
const Employee = require("../db/employeeSchema");

router.get("/", async (req, res) => {
  await Employee.find({})
    .sort({ firstName: 1 })
    .populate("equipment")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.post("/save/newemployee", async (req, res) => {
  const {
    firstName,
    secondName,
    lastName,
    position,
    level,
    equipment,
    amount,
  } = req.body.inputValue;
  const newEmployee = new Employee({
    firstName: firstName,
    secondName: secondName,
    lastName: lastName,
    position: position,
    level: level,
    equipment: equipment,
    amount: amount,
  });
  try {
    await newEmployee.save();
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/edit/:id", async (req, res) => {
  const {
    firstName,
    secondName,
    lastName,
    position,
    level,
    equipment,
    amount,
  } = req.body.data;
  await Employee.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        firstName: firstName,
        secondName: secondName,
        lastName: lastName,
        position: position,
        level: level,
        equipment: equipment,
        amount: amount,
      },
    }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
});
router.post("/filter", async (req, res) => {
  await Employee.find({
    [req.body.filterValue]: { $regex: req.body.inputValue },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({ error }));
});

router.get("/:sortValue", async (req, res) => {
  await Employee.find()
    .sort({ [req.params.sortValue]: 1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.send(400).json({ error });
    });
});
router.get("/edit/:id", async (req, res) => {
  await Employee.findById({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
});

router.delete("/delete/:id", async (req, res) => {
  await Employee.findOneAndDelete({ _id: req.params.id });

  await Employee.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

module.exports = router;
