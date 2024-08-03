require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const corsHandler = require("./middlewares/corsHandler");

require("./database");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(corsHandler);

server.use("/", routes);

server.use(errorHandler);

module.exports = server;
