import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css"; // Import styles

const AdminPanel = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const res = await axios.get("https://anonymous-complaint-chatbot.onrender.com/api/complaints/all");
                setComplaints(res.data);
            } catch (error) {
                console.error("Error fetching complaints", error);
            }
        };
        fetchComplaints();
    }, []);

    return (
        <div className="admin-container">
            <h2>📋 Complaint List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((complaint, index) => (
                        <tr key={index}>
                            <td>{complaint.category}</td>
                            <td>{complaint.message}</td>
                            <td>{new Date(complaint.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
