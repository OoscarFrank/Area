const utils = require("../../Utils");
const dynamo = require("../../../DB");

const Register = async (req, res) => {
    try {
        utils.checkArgs(req.body, ["code"]);
    } catch (err) {
        res.status(err.status).send(err.msg);
        return;
    }

    const data = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: req.body.code,
        redirect_uri: process.env.WEB_URL,
    };

    fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        body: new URLSearchParams(data),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((response) => response.json())
        .then(async (data) => {
            if (data.access_token) {
                req.user.discord = {
                    access_token: data.access_token,
                    refresh_token: data.refresh_token,
                    expire: Date.now() + data.expires_in * 1000,
                };
                await dynamo
                    .client()
                    .put({
                        TableName: "Users",
                        Item: req.user,
                    })
                    .promise();
                res.status(200).send({ msg: "ok" });
            } else {
                res.status(400).send({ msg: "Invalid code" });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};


module.exports = Register;