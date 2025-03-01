const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
    category: { type: String, required: true }, // e.g., "Harassment", "Facilities"
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Complaint", ComplaintSchema);