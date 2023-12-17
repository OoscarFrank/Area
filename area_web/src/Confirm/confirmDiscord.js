
import React, {useEffect} from "react";
import { API_URL } from "../utils";
function getQueryParams() {
    let queryParams = {};
    let queryString = window.location.search.substring(1);
    let queryParamsArray = queryString.split('&');
    for (let i = 0; i < queryParamsArray.length; i++) {
        let pair = queryParamsArray[i].split('=');
        queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return queryParams;
}
function ConfirmDiscord() {
    useEffect(() => {
        let query = getQueryParams();
        let code = query.code;
        fetch( API_URL + "/api/discord/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
                code : code
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

export default ConfirmDiscord;

