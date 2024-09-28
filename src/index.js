require("dotenv").config();
require("express-async-errors");

const express = require("express");
const errorHandle = require("./app/middlewares/errorHandler");

const route = require("./routes");
const app = express();
const db = require("./config/db");
const cors = require("cors");
const { swaggerDocs } = require("./config/swagger");

app.use(cors());
app.use(express.json());
db.connect();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

route(app);
swaggerDocs(app);

app.use(errorHandle);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
