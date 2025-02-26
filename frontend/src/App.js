import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import AdminPanel from "./components/AdminPanel";

function App() {
    return (
        <Router>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to="/" style={{ margin: "10px" }}>Chatbot</Link>
                <Link to="/admin" style={{ margin: "10px" }}>Admin Panel</Link>
            </div>
            <Routes>
                <Route path="/" element={<Chatbot />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
