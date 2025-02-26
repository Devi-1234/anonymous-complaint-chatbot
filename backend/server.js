const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Import complaint routes
const complaintRoutes = require("./routes/complaintRoutes");

// Use complaint routes
app.use("/api/complaints", complaintRoutes);
console.log("Registered Routes:");
app._router.stack.forEach((r) => {
    if (r.route) {
        console.log(r.route.path);
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Anonymous Complaint Chatbot API is running...");
});

// Start server after successful DB connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
