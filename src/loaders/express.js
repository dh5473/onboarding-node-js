const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("@/api");

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan("dev"));

  app.use("/api", routes);

  return app;
};
