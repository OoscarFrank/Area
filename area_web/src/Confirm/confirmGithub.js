import React, {useEffect} from "react";


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

function Confirm() {
    useEffect(() => {
        let params = getQueryParams();
        fetch("http://localhost:8080/api/github/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                token: params.token,
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

export default Confirm;

