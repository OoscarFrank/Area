import React, {useEffect} from "react";
import { API_URL } from "../utils";

function getTokenFromUrl() {
    let hash = window.location.hash.substring(1);
    let params = new URLSearchParams(hash);
    return params.get('token');
}

function ConfirmTrello() {
    useEffect(() => {
        let token = getTokenFromUrl();
        fetch(API_URL + "/api/trello/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
                token: token,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === "ok") {
                    window.location.href = "/";
                }
            });
    }, []);

    return (<></>)
}

export default ConfirmTrello;

