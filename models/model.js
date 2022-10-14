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
  birth: {
    required: true,
    type: String,
  },
  nationality: { required: true, type: String },
  address: { required: true, type: String },
  telnumber: { required: true, type: Number },
  email: { required: true, type: String },
  linkedin: { required: true, type: String },
  studies: [
    {
      institution: { type: String, unique: false, required: false },
      years: { type: String, unique: false, required: false },
      description: { type: String, unique: false, required: false },
    },
  ],
  languages: [
    {
      language: { type: String, unique: false, required: false },
      title: { type: String, unique: false, required: false },
    },
  ],
  workexperience: [
    {
      company: { type: String, unique: false, required: false },
      jobpost: { type: String, unique: false, required: false },
      years: { type: String, unique: false, required: false },
      description: { type: String, unique: false, required: false },
    },
  ],
});

module.exports = mongoose.model("Data", dataSchema);
