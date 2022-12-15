require("dotenv").config();
const mongoose = require("mongoose");
const defaultEmployeesData = require("../populate/defaultEmployeesData.json");
const employeeSchema = require("../db/employeeSchema");
const positionSchema = require("../db/positionSchema");

const position = [
  { name: "Main Actor", salary: 1200, overbudget: 20 },
  { name: "Comic Relief", salary: 1000, overbudget: 20 },
  { name: "Love Interests", salary: 1500, overbudget: 20 },
  { name: "Protagonist", salary: 2000, overbudget: 20 },
  { name: "Antagonist", salary: 2100, overbudget: 20 },
  { name: "Operatour", salary: 1000, overbudget: 20 },
  { name: "Director", salary: 3200, overbudget: 20 },
  { name: "Joker", salary: 600 },
  { name: "Superhero", salary: 1500, overbudget: 20 },
];

const populateData = async () => {
  await employeeSchema.deleteMany({});
  await positionSchema.deleteMany({});
  await employeeSchema.create(...defaultEmployeesData.data);
  await positionSchema.create(...position);
  console.log("Employees created");
  console.log("positions created");
};

const connectWithMongoose = async () => {
  if (!process.env.MONGO_URL) {
    console.log("Error url is missing");
    process.exit(1);
  } else {
    console.log(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL);
  }
};

const main = async () => {
  await connectWithMongoose();

  await populateData();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
