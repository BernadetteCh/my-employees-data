require("dotenv").config();
const mongoose = require("mongoose");
const defaultEmployeesData = require("../populate/defaultEmployeesData.json");
const employeeSchema = require("../db/employeeSchema");
const incomeAgeSchema = require("../db/employeeIncomeAge");

const employeeIncomeAge = [
  { age: "29", income: "2.5000" },
  { age: "35", income: "1.5000" },
  { age: "47", income: "3.2000" },
  { age: "28", income: "2.8000" },
];

const populateData = async () => {
  await employeeSchema.deleteMany({});
  await employeeSchema.create(...defaultEmployeesData.data);
  // await incomeAgeSchema.deleteMany({});
  // await incomeAgeSchema.create(...employeeIncomeAge);
  console.log("Employees created");
  console.log("AgeIncome created");
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
