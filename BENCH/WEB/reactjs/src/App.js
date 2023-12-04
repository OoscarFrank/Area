import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./Login";
import HomePage from "./Home";
import ForgotPwdPage from "./ForgotPwd";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/forgotPwd" element={<ForgotPwdPage />} />
            </Routes>
        </Router>
    );
}

export default App;