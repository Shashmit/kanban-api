const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { schemaOptions } = require("./modelOpt");

const boardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // icon: {
    //   type: String,
    //   default: "❀",
    // },
    title: {
      type: String,
      default: 'Untitled',
    },
    description: {
      type: String,
      default: 'Add a description to your board',
    },
    position: {
      type: Number,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    favoritePostion: {
      type: Number,
      default: 0,
    },
  },
  schemaOptions
);

module.exports = mongoose.model("Board", boardSchema);
