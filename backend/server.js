const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Allow requests from React frontend

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Define Complaint schema and model
const complaintSchema = new mongoose.Schema({
    category: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});
const Complaint = mongoose.model("Complaint", complaintSchema);

// POST - Submit a Complaint (Anonymous)
app.post("/api/complaints/submit", async (req, res) => {
    try {
        const { category, message } = req.body;
        const newComplaint = new Complaint({ category, message });
        await newComplaint.save();
        res.status(201).json({ message: "Complaint submitted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// GET - Fetch All Complaints (For Admin)
app.get("/api/complaints/all", async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Anonymous Complaint Chatbot API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
