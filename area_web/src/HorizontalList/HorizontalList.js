import React, { useState } from "react";
import style from "./HorizontalList.module.css";

import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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
                when: "Message received1",
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
                when: "Message sent2",
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
                when: "Message sent3",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message received4",
                then: [
                    {
                        serviceName: "trello",
                        serviceLogo: TrelloLogo,
                    }
                ],
                isActive: "true"
            },
            {
                when: "Message sent5",
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
                when: "Message received6",
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
                            <img style={{width:'25px', height:'auto', marginRight:'5px'}} key={index} src={thenItem.serviceLogo} alt={thenItem.serviceLogo}/>
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

function CardTop({ item, itemLogo }) {
    return (
        <div className={style.cardTop}>
            <div className={style.cardTopSubcontainer1}>
                <span className={style.cardSubtitle}>When</span>
                <div className={style.cardInstructionList}>
                    <img src={itemLogo} alt={itemLogo} style={{width:'25px', height:'auto'}} />
                    <span className={style.cardInstruction}> {item.when} </span>
                </div>
            </div>
            <div className={style.cardTopSubcontainer2}>
            <Switch
                {...label}
                sx={{
                    width: 62,
                    height: 40,
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            transform: 'translateX(24px)',
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        width: 24,
                        height: 24,
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: 26 / 2,
                    },
                }}
            />
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
                        <img style={{width:'25px', height:'auto', marginRight:'5px'}} key={index} src={thenItem.serviceLogo} alt={thenItem.serviceLogo}/>
                    ))}
                </div>
            </div>
            <div className={style.cardTopSubcontainer3}>
                <IconButton
                    size="large"
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

function Card({ item, itemLogo }) {
    return (
        <div className={style.cardContainer}>
            <CardTop item={item} itemLogo={itemLogo} />
            <CardBottom item={item} />
        </div>
    );
}

function ListContainer({ item }) {
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerGroup = 3;

    const modifiedCards = [
        item.cardList[item.cardList.length - 1],
        ...item.cardList,
        item.cardList[0],
    ];

    const displayedCards = [];
    for (let i = 0; i < cardsPerGroup; i++) {
        displayedCards.push(modifiedCards[(startIndex + i) % modifiedCards.length]);
    }

    const handleDisplayCard = (direction) => {
        setStartIndex(prevIndex => {
            if (direction === 'next') {
                return (prevIndex + 1) % item.cardList.length;
            } else {
                return (prevIndex - 1 + item.cardList.length) % item.cardList.length;
            }
        });
    }

    return (
        <div className={style.listContainer}>
            <div className={style.listHeaderContainer}>
                <div className={style.listHeader}>
                    <img src={item.logo} alt="serviceLogo" className={style.serviceLogo} />
                    <p className={style.listTitle}>{item.name}</p>
                </div>
            </div>
            <div className={style.allListContainer}>
                <div className={style.listBodyContainer}>
                    <div className={style.listBody}>
                        <div className={`${style.blurEffect} ${style.left}`}></div>
                            {displayedCards.map((cardItem, index) => (
                                <Card key={`card-${index}`} item={cardItem} itemLogo={item.logo} />
                            ))}
                        <div className={`${style.blurEffect} ${style.right}`}></div>
                    </div>
                </div>
                <div className={style.locationInCardsContainer}>
                    <IconButton size="small" style={{ backgroundColor: "#252525", color: "#fff", margin: "10px" }} onClick={() => handleDisplayCard('prev')}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    {item.cardList.map((cardItem, index) => (
                        <div key={`cardIndex-${index}`} className={index === startIndex ? style.locationInCardsSelected : style.locationInCards}>
                            <span>{1 + index}</span>
                        </div>
                    ))}
                    <IconButton size="small" style={{ backgroundColor: "#252525", color: "#fff", margin: "10px" }} onClick={() => handleDisplayCard('next')}>
                        <ChevronRightIcon/>
                    </IconButton>
                </div>
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
