import React, { useState } from 'react';
import style from "./AddArea.module.css";

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import Popup from "../Components/PopupInfosCard";

export default function AddArea() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className={style.buttonAddArea}>
                <IconButton aria-label="addArea" size='large' style={{backgroundColor:'#0000FF', color:'#FFF'}} onClick={toggleOpen}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </div>
            {open && (
                <Popup name="Add Area" open={open} setOpen={setOpen} onClose={toggleOpen}>
                    <div>
                        hello world !
                    </div>
                </Popup>
            )}
        </>
    );
}
