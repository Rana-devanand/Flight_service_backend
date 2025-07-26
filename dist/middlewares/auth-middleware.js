"use strict";

var ValidateUserAuth = function ValidateUserAuth(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
      err: "missing required fields"
    });
  }
  next();
};
module.exports = {
  ValidateUserAuth: ValidateUserAuth
};