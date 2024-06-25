import mongoose from "mongoose";

const Schema = mongoose.Schema;

const otherSchema = new Schema({
  make: {
    type: String,
    required: true,
  },

  mode: {
    type: String,
    required: true,
  },
  yom: {
    type: String,
  },
  yop: {
    type: String,
  },
  sh: {
    type: String,
  },
});

export const Other = mongoose.model("Other", otherSchema);
