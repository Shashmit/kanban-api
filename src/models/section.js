const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { schemaOptions } = require("./modelOpt");

const sectionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "",
    },
  },
  schemaOptions
);

module.exports = mongoose.model("Section", sectionSchema);
