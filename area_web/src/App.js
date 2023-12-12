import React from "react";

//Import for navigation through pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import WaitingPage from "./RegisterPage/WaitingPage";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/waitingConfirmation" element={<WaitingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
