const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

require("dotenv").config();
const mongoose = require("mongoose");
const db = mongoose.connection;

const main = () => {
  if (!process.env.MONGO_URL) {
    console.log("Error no MongoUrl");
    process.exit(1);
  } else {
    console.log(process.env.MONGO_URL);
    console.log("Connected to database");
    mongoose.connect(process.env.MONGO_URL);
  }
};

main();

app.get("/", (req, res) => {
  res.send("Hi from server");
});

const employeesRouter = require("./routes/router");
app.use("/api", employeesRouter);
app.listen(port);
console.log("http://localhost:" + port);
