import style from "./Login.module.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import LogoAREA from "./assets/Logo_AREA.png";
import TextField from '@mui/material/TextField';

function TextsFields({ email, setEmail, password, setPassword }) {
    return (
        <div className={style.textFieldsContainer}>
            <div className={style.textFieldContainer}>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className={style.inputTextField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={style.textFieldContainer}>
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    className={style.inputTextField}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>
    );
}

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
        console.log("email : " + email + " password : " + password);
    };

    const handleForgottenPassword = () => {
        navigate("/forgotPwd");
    }

    return (
        <div className={style.MainContainerLoginPage}>
            <img src={LogoAREA} alt="Logo AREA" className={style.logoLoginPage} />
            <TextsFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <div className={style.forgottenPasswordButtonContainer}>
                <button onClick={handleForgottenPassword} className={style.forgottenPasswordButton}>forgotten password</button>
            </div>
            <button className={style.loginButton} onClick={handleLogin}>Login</button>
        </div>
    );
}