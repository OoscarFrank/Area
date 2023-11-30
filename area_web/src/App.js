import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import style from "./App.module.css";
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
