import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import style from "./App.module.css";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
