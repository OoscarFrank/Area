import style from "./LoginPage.module.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import LogoAREA from "../assets/Logo_AREA.png";
import TextField from '@mui/material/TextField';

function TextsFields({ email, setEmail, password, setPassword }) {
    return (
        <div className={style.textFieldsContainer}>
            <div className={style.textFieldContainer}>
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    className={style.inputTextField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={style.textFieldContainer}>
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    className={style.inputTextField}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>
    );
}

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.msg === "ok") {
                    localStorage.setItem("jwt", data.jwt);
                    navigate("/home");
                } else if (data.msg === "User already activated") {
                    setErrorMessage("Cet utilisateur a déjà été activé");
                } else {
                    setErrorMessage("Erreur lors de l'ajout de l'utilisateur");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const handleNotRegistered = () => {
        navigate("/register");
    }

    const handleForgottenPassword = () => {
        console.log("pwd forgotten");
    }

    return (
        <div className={style.MainContainerLoginPage}>
            <img src={LogoAREA} alt="Logo AREA" className={style.logoLoginPage} />
            <TextsFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <div className={style.forgottenPasswordButtonContainer}>
                <button onClick={handleForgottenPassword} className={style.forgottenPasswordButton}>Forgot password ?</button>
            </div>
            <button className={style.loginButton} onClick={handleLogin}>Login</button>
            <div className={style.notRegisteredButtonContainer}>
                <button onClick={handleNotRegistered} className={style.notRegisteredButton}>Not registered for the moment</button>
            </div>
        </div>
    );
}
