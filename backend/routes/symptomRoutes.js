const express = require("express");
const router = express.Router();
const Symptom = require("../models/Symptom");

router.get("/", async (req, res) => {
    const symptoms = await Symptom.find();
    res.json(symptoms);
});

router.post("/check", async (req, res) => {
    const { symptoms } = req.body;

    const matchedConditions = new Set();
    for (let symptom of symptoms) {
        const foundSymptom = await Symptom.findOne({ name: symptom });
        if (foundSymptom) {
            foundSymptom.conditions.forEach(condition => matchedConditions.add(condition));
        }
    }

    res.json({ conditions: Array.from(matchedConditions) });
});

module.exports = router;





























/*const express = require("express");
const Symptom = require("../models/Symptom");
const router = express.Router();

// Get all symptoms
router.get("/", async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get possible conditions based on symptoms
router.post("/check", async (req, res) => {
  try {
    const { symptoms } = req.body;
    const matchedConditions = new Set();

    for (const symptom of symptoms) {
      const foundSymptom = await Symptom.findOne({ name: symptom });
      if (foundSymptom) {
        foundSymptom.conditions.forEach((condition) =>
          matchedConditions.add(condition)
        );
      }
    }

    res.json({ conditions: Array.from(matchedConditions) });
  } catch (error) {
    res.status(500).json({ message: "Error processing symptoms" });
  }
});

module.exports = router;*/