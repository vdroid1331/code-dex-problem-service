const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const errorHandler = require("./utils/errorHandler");
const apiRouter = require("./routes");
const connectToDB = require("./config/db.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({
    message: "Problem service is alive",
  });
});

app.use("/api", apiRouter);

app.listen(PORT, async () => {
  console.log(`Server started on port: ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to the db");
});
