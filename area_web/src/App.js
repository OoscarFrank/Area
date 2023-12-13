import React from "react";

//Import for navigation through pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import Confirm from "./Confirm/confirm";
import WaitingPage from "./RegisterPage/WaitingPage";
import ConfirmTrello from "./Confirm/confirmTrello";
import ConfirmDiscord from "./Confirm/confirmDiscord";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path='/confirmTrello' element={<ConfirmTrello />} />
                <Route path="/confirmDiscord" element={<ConfirmDiscord />} />
                <Route path="/waitingConfirmation" element={<WaitingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
