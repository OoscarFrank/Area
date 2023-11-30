import React, { useState } from "react";
import style from "./Topbar.module.css";
import Logo from "../assets/Logo_AREA.png";
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ButtonInfos({ showInfos, setShowInfos, onClose }) {

    function handleShowInfos() {
        setShowInfos(!showInfos); // Toggle state
        if(showInfos) {
            onClose();
        }
    }

    return (
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
