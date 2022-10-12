const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  studies: {
    unique: false,
    institution: { type: String, unique: false, required: false },
    years: { type: String, unique: false, required: false },
    description: { type: String, unique: false, required: false },
  },
  workexperience: {
    company: { type: String, unique: false, required: false },
    jobpost: { type: String, unique: false, required: false },
    years: { type: Number, unique: false, required: false },
    description: { type: String, unique: false, required: false },
  },
  otherstudies: { type: String, unique: false, required: false },
});

module.exports = mongoose.model("Data", dataSchema);
