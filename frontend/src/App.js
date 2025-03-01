import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Chatbot from "./components/ComplaintChatbot";
import AdminPanel from "./components/AdminPanel";
import Chatbot from "./components/Chatbot";

function App() {
    return (
        <div>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to="/" style={{ margin: "10px" }}>Chatbot</Link>
                <Link to="/admin" style={{ margin: "10px" }}>Admin Panel</Link>
            </div>
            <Routes>
                <Route path="/" element={<Chatbot />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </div>
    );
}

export default App;
