import React, { useState } from "react";
import style from "./Topbar.module.css";
import Logo from "../assets/Logo_AREA.png";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from '@mui/icons-material/Link';
import Popup from "../Components/PopupInfosCard";
import { useNavigate } from "react-router-dom";

import discord from "../assets/DiscordLogo.png";
import trello from "../assets/TrelloLogo.png";
import github from "../assets/GithubLogo.png";
import microsoft from "../assets/Microsoft.png";
import google from "../assets/Google.png";
import asana from "../assets/Asana.png";

const array = [
    {
        title: "Trello",
        logo: trello,
    },
    {
        title: "Discord",
        logo: discord,
    },
    {
        title: "Github",
        logo: github,
    },
    {
        title: "Graph",
        logo: microsoft,
    },
    {
        title: "Google",
        logo: google,
    },
    {
        title: "Asana",
        logo: asana,
    }
];

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
        setShowInfos(!showInfos);
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

function PopupLinks({ showLinks, setShowLinks, onClose }) {
    const navigate = useNavigate();

    const togglePopUp = () => {
        if (showLinks) {
            onClose();
            setShowLinks(false);
        }
    };

    const handleConnectionToService = (index) => {
        if (index === 0) {
            window.location.href = "https://trello.com/1/authorize?expiration=never&name=Area&scope=read,write&response_type=token&key=5514e3ab1f2a77b0fac7475c09686a05&redirect_uri=http://localhost:3000/confirmTrello";
        }
    }

    return (
        <Popup name={"Link your account"} open={showLinks} setOpen={setShowLinks} onClose={togglePopUp}>
            {array && array.map((item, index) => (
                <div className={index === 0 ? style.bodyListItemFirst : style.bodyListItem} key={index} onClick={() => handleConnectionToService(index)}>
                    <div style={{display:'flex', justifyContent:'center', marginLeft:'30px'}}>
                        <img src={item.logo} alt={item.title} className={style.listItemLogo} />
                        <span>{item.title}</span>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginRight:'30px'}}>
                        <LinkIcon />
                    </div>
                </div>
            ))}
        </Popup>
    );
}

function ButtonLinks({ showLinks, setShowLinks, onClose }) {

    function handleShowLinks() {
        setShowLinks(!showLinks);
        if(showLinks) {
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
                onClick={handleShowLinks}
            >
                <LinkIcon/>
            </IconButton>
            {showLinks && (
                <PopupLinks showLinks={showLinks} setShowLinks={setShowLinks} onClose={onClose} />
            )}
        </>
    );
}

export default function Topbar() {
    const [showInfos, setShowInfos] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const handleShowInfos = () => {
        setShowInfos(!showInfos);
        console.log(showInfos);
    }

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
        console.log(showLinks);
    }

    return (
        <div className={style.topbarContainer}>
            <div className={style.topbarRightPart}>
                <img src={Logo} alt="Logo AREA" className={style.logoTopbar} />
                <div className={style.topbarTitle}>Area</div>
            </div>
            <div className={style.topbarLeftPart}>
                <ButtonLinks
                    showLinks={showLinks}
                    setShowLinks={setShowLinks}
                    onClose={handleShowLinks}
                />
                <ButtonInfos
                    showInfos={showInfos}
                    setShowInfos={setShowInfos}
                    onClose={handleShowInfos}
                />
            </div>
        </div>
    );
}
