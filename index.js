require("dotenv").config();
const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");

const db = require("./models");
const cardRouter = require("./routers/card");

const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/card", cardRouter);

db.sequelize.sync().then(() => {
  console.log("DB synced");
});

app.listen(PORT, () => {
  console.log(
    `Running ${process.env.NODE_ENV} mode; listening on port: ${PORT}.`
  );
});
