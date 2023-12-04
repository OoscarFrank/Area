import React, { useState } from "react";
import style from "./Topbar.module.css";
import Logo from "../assets/Logo_AREA.png";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";

function InfosUser({ showInfos, setShowInfos, onClose }) {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }

    const togglePopUp = () => {
        if (showInfos) {
            onClose();
            setShowInfos(false);
        }
    };

    return (
        <div style={{width:'100%', height:'100%', position:'fixed', top:'0px', left:'0px'}} onClick={togglePopUp}>
            <div className={style.popupInfosUser}>
                <div style={{marginTop:'10px', width:'95%', display:'flex', justifyContent:'flex-end'}}>
                    <IconButton onClick={() => setShowInfos(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={style.popupInfosTexteContainer}>
                    <span className={style.popupInfosTitle}>Name - First name</span>
                    <span className={style.popupInfosSubtitle}>email</span>
                </div>
                <div className={style.popupInfosTexteContainer}>
                    <Button onClick={logout} variant="contained" style={{backgroundColor:'#FF0000', color:'aliceblue', width:'75%', marginTop:'10px', marginBottom:'10px'}}>Logout</Button>
                </div>
            </div>
        </div>
    );
}

function ButtonInfos({ showInfos, setShowInfos, onClose }) {

    function handleShowInfos() {
        setShowInfos(!showInfos); // Toggle state
        if(showInfos) {
            onClose();
        }
    }

    return (
        <>
            <IconButton
                size="large"
                style={{
                    backgroundColor: "#252525",
                    color: "aliceblue",
                    marginRight: "40px",
                }}
                onClick={handleShowInfos}
            >
                <AccountCircleIcon/>
            </IconButton>
            {showInfos && (
                <InfosUser showInfos={showInfos} setShowInfos={setShowInfos} onClose={onClose} />
            )}
        </>
    );
}

export default function Topbar() {
    const [showInfos, setShowInfos] = useState(false);

    const handleShowInfos = () => {
        setShowInfos(!showInfos);
        console.log(showInfos);
    }

    return (
        <div className={style.topbarContainer}>
            <div className={style.topbarRightPart}>
                <img src={Logo} alt="Logo AREA" className={style.logoTopbar} />
                <div className={style.topbarTitle}>Area</div>
            </div>
            <div className={style.topbarLeftPart}>
                <ButtonInfos
                    showInfos={showInfos}
                    setShowInfos={setShowInfos}
                    onClose={handleShowInfos}
                />
            </div>
        </div>
    );
}
