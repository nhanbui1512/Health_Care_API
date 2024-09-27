require("dotenv").config();
const express = require("express");
require("express-async-errors");
const errorHandle = require("./app/middlewares/errorHandler");
const morgan = require("morgan");
const route = require("./routes");
const app = express();
const db = require("./config/db");
const cors = require("cors");

app.use(cors());
app.use(express.json());
db.connect();
const port = 3000;
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
route(app);

app.use(errorHandle);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
