import React, { useState, useEffect } from "react";
import style from "./HorizontalList.module.css";

import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteIcon from '@mui/icons-material/Delete';

import DiscordLogo from "../assets/DiscordLogo.png";
import TrelloLogo from "../assets/TrelloLogo.png";
import GithubLogo from "../assets/GithubLogo.png";
import IMG from "../assets/IMG....png";

import PopupWoverlay from "../Components/PopupInfosCard";

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

function InformationsOnPopup({ item, itemLogo }) {
    return (
        <div className={style.informationsMainContainer}>
            <div className={style.InformationsOnPopupTop} >
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <span className={style.InformationsOnPopupAction}><b>When</b></span>
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
                <div className={style.informationsOnPopupContainerLogoAndText} >
                    <div className={style.informationsOnPopupSubContainerTopLogoAndText}>
                        <img src={itemLogo} alt={itemLogo} style={{width:'25px', height:'auto', marginRight:'15px'}} />
                        {item.when}
                    </div>
                </div>
            </div>
            <div style={{width:'90%'}}>
                <span className={style.InformationsOnPopupAction}><b>Then</b></span>
                <div className={style.informationsOnPopupContainerLogoAndText}>
                    <div className={style.informationsOnPopupSubContainerBottomLogoAndText}>
                        {item && item.then && item.then.map((thenItem, index) => (
                            <div key={index} style={{display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'20px'}}>
                                <img style={{width:'25px', height:'auto', marginRight:'5px'}} key={index} src={thenItem.serviceLogo} alt={thenItem.serviceLogo}/>
                                <span>{item.when}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{position:'fixed',display : "flex", justifyContent: "center", bottom : "12%", width : "100%", left: "22%"}}>

                <IconButton
                    size="large"
                    style={{
                        backgroundColor: "#FF0000",
                        color: "#fff",
                        margin: "10px",
                        position: "relative"
                    }}
                >
                    <DeleteIcon/>
                </IconButton>
            </div>
        </div>
    );
}

function CardTop({ item, itemLogo }) {
    const handleKeyDown = (event, checked, setChecked) => {
        if (event.key === 'Enter') {
            setChecked(!checked);
        }
    };

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
                    checked={checked}
                    onChange={handleChange}
                    onKeyDown={(event) => handleKeyDown(event, checked, setChecked)}
                    tabIndex={0} // Permet la navigation au clavier
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

function CardBottom({ item, itemLogo }) {
    const [showInformationsCard, setShowInformationsCard] = useState(false);
    const [newThen, setNewThen] = useState([]);

    useEffect(() => {
        let tempNewThen = [];
        if (item && item.then && item.then.length > 5) {
            for (let i = 0; i < 5; i++) {
                tempNewThen.push(item.then[i]);
            }
            tempNewThen.push({
                serviceName: "...",
                serviceLogo: IMG, // Make sure IMG is defined or imported
            });
        }
        setNewThen(tempNewThen);
    }, [item]);

    const toggleShowInformationsCard = () => {
        setShowInformationsCard(!showInformationsCard);
    };

    return (
        <div className={style.cardBottom}>
            <div className={style.cardTopSubcontainer1}>
                <span className={style.cardSubtitle}>Then</span>
                <div className={style.cardInstructionList}>
                {newThen.length > 0 ? (
                    newThen.map((thenItem, index) => (
                        <img key={index} style={{width:'25px', height:'auto', marginRight:'5px'}} src={thenItem.serviceLogo} alt={thenItem.serviceName}/>
                        ))
                    ) : (
                        item && item.then && item.then.map((thenItem, index) => (
                            <img key={index} style={{width:'25px', height:'auto', marginRight:'5px'}} src={thenItem.serviceLogo} alt={thenItem.serviceName}/>
                        ))
                    )}
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
                    name={"Edit AREA"}
                >
                    <InformationsOnPopup item={item} itemLogo={itemLogo} />
                </PopupWoverlay>
            )}
        </div>
    );
}

function Card({ item, itemLogo }) {
    return (
        <div className={style.cardContainer}>
            <CardTop item={item} itemLogo={itemLogo} />
            <CardBottom item={item} itemLogo={itemLogo} />
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
                        <div key={`cardIndex-${index}`} className={index === startIndex ? style.locationInCardsSelected : style.locationInCards} />
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
