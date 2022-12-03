const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi from server");
});

const employeesRouter = require("./routes/router");
app.use("/api", employeesRouter);
app.listen(port);
console.log("http://localhost:" + port);
