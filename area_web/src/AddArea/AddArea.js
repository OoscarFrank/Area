import React, { useState } from 'react';
import style from "./AddArea.module.css";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/joy/Checkbox';

import discord from "../assets/DiscordLogo.png";
import trello from "../assets/TrelloLogo.png";
import github from "../assets/GithubLogo.png";
import x from "../assets/Logo_AREA.png";

import Popup from "../Components/PopupInfosCard";

const array = [
    {
        ServiceName : "Discord",
        ServiceLogo : discord,
        actionsAvailable : [
            {
                actionName : "Message sent",
            },
            {
                actionName : "Message received",
            },
            {
                actionName : "Server created",
            },
        ],
    },
    {
        ServiceName : "Trello",
        ServiceLogo : trello,
        actionsAvailable : [
            {
                actionName : "Card created",
            },
            {
                actionName : "Card removed",
            },
            {
                actionName : "New workspace",
            },
        ],
    },
    {
        ServiceName : "Github",
        ServiceLogo : github,
        actionsAvailable : [
            {
                actionName : "Repository created",
            },
            {
                actionName : "Repository deleted",
            },
            {
                actionName : "New push on repository",
            },
        ],
    },
    {
        ServiceName : "X",
        ServiceLogo : x,
        actionsAvailable : [
            {
                actionName : "Repository created",
            },
            {
                actionName : "Repository deleted",
            },
            {
                actionName : "New push on repository",
            },
        ],
    },
    {
        ServiceName : "Discord",
        ServiceLogo : discord,
        actionsAvailable : [
            {
                actionName : "Message sent",
            },
            {
                actionName : "Message received",
            },
            {
                actionName : "Server created",
            },
        ],
    },
    {
        ServiceName : "Trello",
        ServiceLogo : trello,
        actionsAvailable : [
            {
                actionName : "Card created",
            },
            {
                actionName : "Card removed",
            },
            {
                actionName : "New workspace",
            },
        ],
    },
    {
        ServiceName : "Github",
        ServiceLogo : github,
        actionsAvailable : [
            {
                actionName : "Repository created",
            },
            {
                actionName : "Repository deleted",
            },
            {
                actionName : "New push on repository",
            },
        ],
    },
    {
        ServiceName : "X",
        ServiceLogo : x,
        actionsAvailable : [
            {
                actionName : "Repository created",
            },
            {
                actionName : "Repository deleted",
            },
            {
                actionName : "New push on repository",
            },
        ],
    },
    {
        ServiceName : "Discord",
        ServiceLogo : discord,
        actionsAvailable : [
            {
                actionName : "Message sent",
            },
            {
                actionName : "Message received",
            },
            {
                actionName : "Server created",
            },
        ],
    },
    {
        ServiceName : "Trello",
        ServiceLogo : trello,
        actionsAvailable : [
            {
                actionName : "Card created",
            },
            {
                actionName : "Card removed",
            },
            {
                actionName : "New workspace",
            },
        ],
    },
    {
        ServiceName : "Github",
        ServiceLogo : github,
        actionsAvailable : [
            {
                actionName : "Repository created",
            },
            {
                actionName : "Repository deleted",
            },
            {
                actionName : "New push on repository",
            },
        ],
    },
    {
        ServiceName : "X",
        ServiceLogo : x,
        actionsAvailable : [
            {
                actionName : "Repository created",
            },
            {
                actionName : "Repository deleted",
            },
            {
                actionName : "New push on repository",
            },
        ],
    }
];

function ListItemsChooseReaction({ item, progression, setProgression }) {
    const [checkedState, setCheckedState] = useState(
        item.actionsAvailable.map(() => false)
    );

    const handleCheckboxChange = (index) => {
        const updatedCheckedState = checkedState.map((item, idx) =>
            idx === index ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Enter') {
            handleCheckboxChange(index);
        }
    };

    return (
        <div className={style.listItemContainer}>
            <div className={style.headerRowList}>
                <img src={item.ServiceLogo} alt={item.ServiceName} className={style.listItemLogo} />
                {item.ServiceName}
            </div>
            {item.actionsAvailable.map((action, index) => (
                <div className={index === 0 ? style.bodyListItemFirst : index === (item.actionsAvailable.length - 1) ? style.bodyListItemLast : style.bodyListItem} key={index}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={item.ServiceLogo} alt={item.ServiceName} className={style.listItemLogo} />
                        <span>{action.actionName}</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Checkbox
                            checked={checkedState[index]}
                            onChange={() => handleCheckboxChange(index)}
                            onKeyDown={(event) => handleKeyDown(event, index)}
                            tabIndex={0}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

function ListItemsChooseAction({ item, setProgression, setSelectedAction, setSelectedActionLogo }) {

    const handleClick = (actionName) => {
        setSelectedAction(actionName);
        setSelectedActionLogo(item.ServiceLogo);
        setProgression(1);
    };

    const handleKeyDown = (event, actionName) => {
        if (event.key === 'Enter') {
            handleClick(actionName);
        }
    };

    return (
        <div className={style.listItemContainer}>
            <div className={style.headerRowList}>
                <img src={item.ServiceLogo} alt={item.ServiceName} className={style.listItemLogo} />
                {item.ServiceName}
            </div>
            {item.actionsAvailable.map((action, index) => (
                <div
                    className={index === 0 ? style.bodyListItemFirst : index === (item.actionsAvailable.length - 1) ? style.bodyListItemLast : style.bodyListItem}
                    key={index}
                    onClick={() => handleClick(action.actionName)}
                    onKeyDown={(event) => handleKeyDown(event, action.actionName)}
                    tabIndex={0} // Permet la navigation au clavier
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={item.ServiceLogo} alt={item.ServiceName} className={style.listItemLogo} />
                        <span>{action.actionName}</span>
                    </div>
                    <ChevronRightIcon />
                </div>
            ))}
        </div>
    );
}

export default function AddArea() {
    const [open, setOpen] = useState(false);
    const [progression, setProgression] = useState(0);
    const [selectedAction, setSelectedAction] = useState(null);
    const [selectedActionLogo, setSelectedActionLogo] = useState(null);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const handleSubmit = () => {
        setOpen(!open);
        setProgression(0);
    }

    return (
        <>
            <div className={style.buttonAddArea}>
                <IconButton aria-label="addArea" size='large' style={{backgroundColor:'#0000FF', color:'#FFF'}} onClick={toggleOpen}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </div>
            {open && (
                <Popup name={progression === 0 ? "Add an action" : "Add a reaction"} open={open} setOpen={setOpen} onClose={toggleOpen}>
                    {progression === 0 && (
                        <div className={style.gridList}>
                            {array.map((item, index) => (
                                <ListItemsChooseAction key={index} item={item} setProgression={setProgression} setSelectedAction={setSelectedAction} setSelectedActionLogo={setSelectedActionLogo} />
                            ))}
                        </div>
                    )}
                    {progression === 1 && (
                        <>
                            <div style={{display:'flex', flexDirection:'row', width:'100%', alignContent:'center', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
                                <button className={style.buttonBack} onClick={() => setProgression(0)}><ChevronLeftIcon /></button>
                                <span className={style.actionSelected}>
                                    <img src={selectedActionLogo} alt={selectedAction} className={style.listItemLogo} /> {selectedAction}
                                </span>
                            </div>
                            <div className={style.gridList}>
                                {array.map((item, index) => (
                                    <ListItemsChooseReaction key={index} item={item} setProgression={setProgression} />
                                ))}
                            </div>
                            <div style={{display:'flex', flexDirection:'row', width:'100%', alignContent:'center', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
                                <button className={style.buttonSubmitAddArea} onClick={handleSubmit}>
                                    <b>Submit</b>
                                </button>
                            </div>
                        </>
                    )}
                </Popup>
            )}
        </>
    );
}
