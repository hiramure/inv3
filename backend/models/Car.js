import mongoose from "mongoose";

const Schema = mongoose.Schema;

const carSchema = new Schema({
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

export const Car = mongoose.model("Car", carSchema);
