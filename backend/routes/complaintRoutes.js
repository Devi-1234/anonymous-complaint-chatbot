const express = require("express");
const router = express.Router();
const { submitComplaint, getComplaints } = require("../controllers/complaintController");

// Route to submit a new complaint
router.post("/", submitComplaint);

// Route to get all complaints
router.get("/", getComplaints);

module.exports = router;
