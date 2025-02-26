const express = require("express");
const Complaint = require("../models/Complaint");

const router = express.Router();

// POST - Submit a Complaint (Anonymous)
router.post("/submit", async (req, res) => {
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
router.get("/all", async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
