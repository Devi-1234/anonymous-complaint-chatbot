import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css"; // Import CSS file

const Chatbot = () => {
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/complaints/submit", {
                category,
                message
            });
            setResponse(res.data.message);
            setCategory("");
            setMessage("");
        } catch (error) {
            setResponse("Error submitting complaint");
        }
    };

    return (
        <div className="chat-container">
            <h2>📢 Anonymous Complaint Bot</h2>
            <form onSubmit={handleSubmit}>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Harassment">Harassment</option>
                    <option value="Facilities">Physical violence</option>
                    <option value="Academics">Sexual violence</option>
                    <option value="Economic">Economical violence</option>
                    <option value="Others">Others</option>
                </select>
                <textarea 
                    placeholder="Enter your complaint..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required
                />
                <button type="submit">🚀 Submit</button>
            </form>
            {response && <p className="response-message">{response}</p>}
        </div>
    );
};

export default Chatbot;
