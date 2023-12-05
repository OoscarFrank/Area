import style from "./RegisterPage.module.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import LogoAREA from "../assets/Logo_AREA.png";
import TextField from '@mui/material/TextField';

function TextsFields({ email, setEmail, firstName, setFirstName, lastName, setLastName, password, setPassword, passwordConfirmation, setPasswordConfirmation }) {
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
                    label="First name"
                    variant="outlined"
                    className={style.inputTextField}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className={style.textFieldContainer}>
                <TextField
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                    className={style.inputTextField}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
            <div className={style.textFieldContainer}>
                <TextField
                    id="outlined-basic"
                    label="Password confirmation"
                    variant="outlined"
                    className={style.inputTextField}
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
        </div>
    );
}

export default function Register() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/home");
        console.log("email: " + email + " firstName: " + firstName + " lastName: " + lastName + " password: " + password + " passwordConfirmation: " + passwordConfirmation);
    };

    return (
        <div className={style.MainContainerRegisterPage}>
            <img src={LogoAREA} alt="Logo AREA" className={style.logoRegisterPage} />
            <TextsFields email={email} setEmail={setEmail} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} />
            <button className={style.registerButton} onClick={handleRegister}>Register</button>
        </div>
    );
}
