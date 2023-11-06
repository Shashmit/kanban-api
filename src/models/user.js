const mongoose = require("mongoose");
const { schemaOptions } = require("./modelOpt");

const userSchemma = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      select: false, // hide password from query results
    },
  },
  schemaOptions
);

module.exports = mongoose.model("User", userSchemma);   // export model