"use strict";

var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
module.exports = storage;