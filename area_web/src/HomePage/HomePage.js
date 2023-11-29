import style from "./HomePage.module.css";
import React from 'react';

export default function Home() {
    const navigateFunction = () => {
        window.location = '/home';
    };

    return (
        <div className={style.MainContainerHomePage}>
            hello Home
        </div>
    );
}
