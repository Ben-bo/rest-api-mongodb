const dbConfig = require("../../config/db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const db = {
  mongoose: mongoose,
  URL: dbConfig.URL,
};
module.exports = db;
