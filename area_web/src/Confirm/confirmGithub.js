import React, {useEffect} from "react";


function Confirm() {
    useEffect(() => {
        let params = (new URL(document.location)).searchParams;
        let code = params.get("code");

        console.log(code)
        if (!code) return;
        fetch("http://localhost:8080/api/github/register", {
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