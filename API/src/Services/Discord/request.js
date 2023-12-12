const dynamo = require("../../../DB");

const getToken = (user, callback) => {
    console.log(user.discord);
    const data = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: user.discord.refresh_token,
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
            user.discord = {
                access_token: data.access_token,
                refresh_token: data.refresh_token,
                expire: Date.now() + data.expires_in * 1000,
            };

            await dynamo
                .client()
                .put({
                    TableName: "Users",
                    Item: user,
                })
                .promise()
            return callback(data.access_token);
        })
        .catch((err) => {
            return callback(null);
        });
};

const request = (url, content, user, callback) => {
    if (!user.discord || !user.discord.access_token) {
        return callback(null, { msg: "Missing acess token", status: 500 });
    }

    if (!content.headers) content.headers = {};
    content.headers["Authorization"] = `Bearer ${user.discord.access_token}`;
    fetch(url, content)
        .then(async (response) => {
            if (response.status == 401 || response.status == 403) {
                getToken(user, async (token) => {
                    if (token == null) {
                        return callback(null, {
                            msg: "Cannot refresh the token",
                            status: 500,
                        });
                    }
                    
                    content.headers["Authorization"] = `Bearer ${token}`;
                    fetch(url, content)
                        .then((response) => response.json())
                        .then((data) => {
                            return callback(data, null);
                        })
                        .catch((err) => {
                            console.err(err);
                            return callback(null, { status: 500, msg: err });
                        });
                });
            }
            return response.json();
        })
        .then((data) => {
            return callback(data, null);
        })
        .catch((err) => {
            console.err(err);
            return callback(null, { status: 500, msg: err });
        });
};

module.exports = request;
