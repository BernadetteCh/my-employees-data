require("dotenv").config();
const mongoose = require("mongoose");
const defaultEmployeesData = require("../populate/defaultEmployeesData.json");
const employeeSchema = require("../db/employeeSchema");

const populateData = async () => {
  await employeeSchema.deleteMany({});
  await employeeSchema.create(...defaultEmployeesData.data);
  console.log("Employees created");
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
