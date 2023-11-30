import React, { useState } from "react";
import style from "./PopupInfosCard.module.css";

import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

import serviceLogo from "../assets/Logo_AREA.png";

import DiscordLogo from "../assets/DiscordLogo.png";
import TrelloLogo from "../assets/TrelloLogo.png";
import GithubLogo from "../assets/GithubLogo.png";

import CloseIcon from "@mui/icons-material/Close";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function PopupWoverlay({ setOpen, open, onClose, children, name }) {

    const togglePopUp = () => {
        if (open) {
            onClose();
            setOpen(false);
        }
    };

    if (!open) {
        console.error("PopupWoverlay: open prop is false");
        return <></>;
    }
    return (
        <div className={style.settingsOverlay} onClick={togglePopUp}>
            <div
                className={style.settingsPopUp}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={style.topbarSettingsPopUp}>
                    <span className={style.settingsPopUpTitle}>{name}</span>
                    <IconButton onClick={togglePopUp}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}
