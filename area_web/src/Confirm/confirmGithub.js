import React, {useEffect} from "react";
import { API_URL } from "../utils";


function Confirm() {
    useEffect(() => {
        let params = (new URL(document.location)).searchParams;
        let code = params.get("code");

        if (!code) return;
        fetch( API_URL + "/api/github/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
                code: code,
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

export default Confirm;