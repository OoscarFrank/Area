import React, { useState } from "react";
import style from "./HorizontalList.module.css";

import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

import serviceLogo from "../assets/Logo_AREA.png";

import DiscordLogo from "../assets/DiscordLogo.png";
import TrelloLogo from "../assets/TrelloLogo.png";
import GithubLogo from "../assets/GithubLogo.png";

import PopupWoverlay from "./PopupInfosCard";

const array = [
    {
        logo: DiscordLogo,
        name: "Discord",
        cardList: [
            {
                when: "Message received",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    },
                    {
                        serviceName: "github",
                        serviceLogo: GithubLogo,
                    },
                    {
                        serviceName: "X",
                        serviceLogo: DiscordLogo,
                    },
                    {
                        serviceName: "spotify",
                        serviceLogo: DiscordLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message sent",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    },
                    {
                        serviceName: "github",
                        serviceLogo: GithubLogo,
                    },
                    {
                        serviceName: "X",
                        serviceLogo: DiscordLogo,
                    },
                    {
                        serviceName: "spotify",
                        serviceLogo: DiscordLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message sent",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message received",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message sent",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    },
                    {
                        serviceName: "github",
                        serviceLogo: GithubLogo,
                    },
                    {
                        serviceName: "X",
                        serviceLogo: DiscordLogo,
                    },
                    {
                        serviceName: "spotify",
                        serviceLogo: DiscordLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message received",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    },
                    {
                        serviceName: "github",
                        serviceLogo: GithubLogo,
                    },
                    {
                        serviceName: "X",
                        serviceLogo: DiscordLogo,
                    },
                    {
                        serviceName: "spotify",
                        serviceLogo: DiscordLogo,
                    }
                ],
                isActive: "true"
            },
        ],
    },
    {
        logo: TrelloLogo,
        name: "Trello",
        cardList: [
            {
                when: "Message sent",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message received",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    },
                    {
                        serviceName: "github",
                        serviceLogo: GithubLogo,
                    },
                    {
                        serviceName: "X",
                        serviceLogo: DiscordLogo,
                    },
                    {
                        serviceName: "spotify",
                        serviceLogo: DiscordLogo,
                    }
                ],
                isActive: "true"
            },
        ],
    },
    {
        logo: GithubLogo,
        name: "Github",
        cardList: [
            {
                when: "Message received",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    },
                    {
                        serviceName: "github",
                        serviceLogo: GithubLogo,
                    },
                    {
                        serviceName: "X",
                        serviceLogo: DiscordLogo,
                    },
                    {
                        serviceName: "spotify",
                        serviceLogo: DiscordLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message sent",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message received",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message sent",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
        ],
    },
];

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function InformationsOnPopup({ item }) {
    return (
        <div className={style.informationsMainContainer}>
            <div className={style.cardTop}>
                <div className={style.cardTopSubcontainer1}>
                    <span className={style.cardSubtitle}>When</span>
                    <span className={style.cardInstruction}> {item.when} </span>
                </div>
                <div className={style.cardTopSubcontainer2}>
                    <Switch {...label} />
                </div>
            </div>
            <div className={style.cardBottom}>
                <div className={style.cardTopSubcontainer1}>
                    <span className={style.cardSubtitle}>Then</span>
                    <div className={style.cardInstructionList}>
                        {item && item.then && item.then.map((thenItem, index) => (
                            <img style={{width:'25px', height:'30px', marginRight:'5px'}} key={index} src={thenItem.serviceLogo} alt={thenItem.serviceLogo}/>
                        ))}
                    </div>
                </div>
                <div className={style.cardTopSubcontainer3}>
                    <IconButton
                        size="small"
                        style={{
                            backgroundColor: "#252525",
                            color: "#fff",
                            margin: "10px",
                        }}
                    >
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

function CardTop({ item }) {
    return (
        <div className={style.cardTop}>
            <div className={style.cardTopSubcontainer1}>
                <span className={style.cardSubtitle}>When</span>
                <span className={style.cardInstruction}> {item.when} </span>
            </div>
            <div className={style.cardTopSubcontainer2}>
                <Switch {...label} />
            </div>
        </div>
    );
}

function CardBottom({ item }) {
    const [showInformationsCard, setShowInformationsCard] = useState(false);

    const toggleShowInformationsCard = () => {
        setShowInformationsCard(!showInformationsCard);
    };

    return (
        <div className={style.cardBottom}>
            <div className={style.cardTopSubcontainer1}>
                <span className={style.cardSubtitle}>Then</span>
                <div className={style.cardInstructionList}>
                    {item && item.then && item.then.map((thenItem, index) => (
                        <img style={{width:'25px', height:'30px', marginRight:'5px'}} key={index} src={thenItem.serviceLogo} alt={thenItem.serviceLogo}/>
                    ))}
                </div>
            </div>
            <div className={style.cardTopSubcontainer3}>
                <IconButton
                    size="small"
                    style={{
                        backgroundColor: "#252525",
                        color: "#fff",
                        margin: "10px",
                    }}
                    onClick={toggleShowInformationsCard}
                >
                    <SettingsIcon/>
                </IconButton>
            </div>
            {showInformationsCard && (
                <PopupWoverlay
                    setOpen={setShowInformationsCard}
                    open={showInformationsCard}
                    onClose={toggleShowInformationsCard}
                    name={""}
                >
                    <InformationsOnPopup item={item} />
                </PopupWoverlay>
            )}
        </div>
    );
}

function Card({ item }) {
    return (
        <div className={style.cardContainer}>
            <CardTop item={item} />
            <CardBottom item={item} />
        </div>
    );
}

function ListContainer({ item }) {
    return (
        <div className={style.listContainer}>
            <div className={style.listHeader}>
                <img src={item.logo} alt="serviceLogo" className={style.serviceLogo} />
                <p className={style.listTitle}>{item.name}</p>
            </div>
            <div className={style.listBody}>
                {item.cardList.map((cardItem, index) => (
                    <Card key={index} item={cardItem} />
                ))}
            </div>
        </div>
    );
}

export default function HorizontalList(showInformationsCard, setShowInformationsCard) {
    return (
        <div className={style.mainContainerList}>
            {array && array.map((item, index) => (
                <ListContainer key={index} item={item} />
            ))}
        </div>
    );
}
