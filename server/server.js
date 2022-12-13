const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());

require("dotenv").config();
const mongoose = require("mongoose");
const db = mongoose.connection;

const main = () => {
  if (!process.env.MONGO_URL) {
    console.log("Error no MongoUrl");
    process.exit(1);
  } else {
    console.log(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  }
};

main();

const employeesRouter = require("./routes/employee-router");
const equipmentRouter = require("./routes/equipment-router");
const mainRouter = require("./routes/mainRouter");

app.use("/api", employeesRouter);
app.use("/equipment", equipmentRouter);
app.use("/", mainRouter);

app.listen(port);
console.log("http://localhost:" + port);
