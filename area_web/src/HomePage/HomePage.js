import style from "./HomePage.module.css";
import React from 'react';

import Topbar from "../Topbar/Topbar";
import HorizontalList from "../HorizontalList/HorizontalList";
import AddArea from "../AddArea/AddArea";

export default function Home() {

    return (
        <div className={style.MainContainerHomePage}>
            <div className={style.topbarContainer}>
                <Topbar />
            </div>
            <div className={style.horizontalListContainer}>
                <HorizontalList />
            </div>
            <AddArea />
        </div>
    );
}
