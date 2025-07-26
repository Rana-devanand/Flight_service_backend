const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const apiRoutes = require("./routers/index");
app.use("/uploads", express.static("uploads"));
const createAndRunServer = async () => {
  app.use(morgan("tiny"));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
createAndRunServer();
