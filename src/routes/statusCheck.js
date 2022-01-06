const express = require("express");
const Router = express.Router();
const statusCheck = require("../controller/statusCheck");
Router.post("/", statusCheck.checkWebsite);
module.exports = Router;
