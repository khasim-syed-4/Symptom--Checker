
const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema({
    name: String,
    conditions: [String]
});

module.exports = mongoose.model("Symptom", symptomSchema);
















/*const mongoose = require("mongoose");

const SymptomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  conditions: [{ type: String }],
});

module.exports = mongoose.model("Symptom", SymptomSchema);*/