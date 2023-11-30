import React, { useState } from "react";

//Import for navigation through pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Style (css)
import style from "./App.module.css";

//Pages
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
