import React, {useEffect} from "react";

function getTokenFromUrl() {
    let hash = window.location.hash.substring(1);
    let params = new URLSearchParams(hash);
    return params.get('token');
}

function ConfirmTrello() {
    useEffect(() => {
        let token = getTokenFromUrl();
        fetch("http://localhost:8080/api/trello/register", {
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
                    window.location.href = "/home";
                }
            });
    }, []);

    return (<></>)
}

export default ConfirmTrello;

