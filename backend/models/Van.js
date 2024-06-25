import mongoose from "mongoose";

const Schema = mongoose.Schema;

const vanSchema = new Schema({
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

export const Van = mongoose.model("Van", vanSchema);
