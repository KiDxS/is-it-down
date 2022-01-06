const express = require("express");
const Router = express.Router();
const statusCheckRoute = require("./statusCheck");
const homeRoute = require("./homeRoute");

Router.use("/status", statusCheckRoute);
Router.use("/", homeRoute);

module.exports = Router;
