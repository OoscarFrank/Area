const dynamo = require("../../../DB");

const getToken = async (discordUser) => {
    const data = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: discordUser.refresh_token,
    };

    fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        body: new URLSearchParams(data),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then(async (response) => await response.json())
        .then(async (data) => {
            discordUser = {
                userId : discordUser.userId,
                access_token: data.access_token,
                refresh_token: data.refresh_token,
                expire: Date.now() + data.expires_in * 1000,
                id : discordUser.id,
                name : discordUser.name
            };

            await dynamo
                .client()
                .put({
                    TableName: "DiscordUsers",
                    Item: discordUser,
                })
                .promise();
            return data.access_token;
        })
        .catch((err) => {
            return null;
        });
};

const request = async (url, discordUser, content) => {
    if (!discordUser || !discordUser.access_token)
        throw { msg: "Missing acess token", status: 500 };
    if (!content) content = {};
    if (!content.headers) content.headers = {};
    content.headers["Authorization"] = `Bearer ${discordUser.access_token}`;

    try {
        let response = await fetch(url, content);
        if (response.status == 401 || response.status == 403) {
            let token = await getToken(discordUser);
            if (token == null)
                throw { msg: "Cannot refresh the token", status: 500 };
            content.headers["Authorization"] = `Bearer ${token}`;
            try {
                return await (await fetch(url, content)).json();
            } catch (err) {
                throw { msg: err, status: 500 };
            }
        }
        let data = await response.json();
        return data;
    } catch (err) {
        throw { msg: err, status: 500 };
    }
};

module.exports = request;
