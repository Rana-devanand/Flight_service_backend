"use strict";

var dotenv = require("dotenv");
var bcrypt = require("bcrypt");
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  SALT: bcrypt.genSaltSync(10)
};