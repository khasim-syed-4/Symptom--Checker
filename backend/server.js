
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const symptomRoutes = require("./routes/symptomRoutes");
app.use("/api/symptoms", symptomRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

















/*





const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const symptomsRoutes = require("./routes/symptomRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); // Connect to MongoDB

// API Routes
app.use("/api/symptoms", symptomsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/