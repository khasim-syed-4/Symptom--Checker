const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Symptom = require("./models/Symptom");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"));

const symptoms = [
    { name: "fever", conditions: ["Flu", "COVID-19", "Dengue"] },
    { name: "cough", conditions: ["Cold", "COVID-19", "Bronchitis"] },
    { name: "headache", conditions: ["Migraine", "Dehydration", "Tension Headache"] },
    { name: "sore throat", conditions: ["Strep Throat", "Flu", "Common Cold"] },
    { name: "fatigue", conditions: ["Anemia", "Thyroid Issues", "Diabetes"] },
    { name: "shortness of breath", conditions: ["Asthma", "Pneumonia", "Heart Disease"] },
    { name: "nausea", conditions: ["Food Poisoning", "Gastritis", "Pregnancy"] },
    { name: "vomiting", conditions: ["Stomach Flu", "Food Poisoning", "Motion Sickness"] },
    { name: "diarrhea", conditions: ["Irritable Bowel Syndrome", "Infection", "Food Poisoning"] },
    { name: "constipation", conditions: ["Dehydration", "Low Fiber Diet", "Irritable Bowel Syndrome"] },
    { name: "chest pain", conditions: ["Heart Attack", "Angina", "GERD"] },
    { name: "joint pain", conditions: ["Arthritis", "Lupus", "Gout"] },
    { name: "muscle pain", conditions: ["Fibromyalgia", "Strain", "Vitamin D Deficiency"] },
    { name: "weight loss", conditions: ["Diabetes", "Cancer", "Thyroid Disease"] },
    { name: "weight gain", conditions: ["Thyroid Disease", "Depression", "PCOS"] }
];

const seedDB = async () => {
    await Symptom.deleteMany({});
    await Symptom.insertMany(symptoms);
    console.log("✅ Sample Data Inserted");
    mongoose.connection.close();
};

seedDB();