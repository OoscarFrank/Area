const utils = require("../../Utils");
const dynamo = require("../../../DB");

const Register = async (req, res) => {
    try {
        utils.checkArgs(req.body, ["code"]);
    } catch (err) {
        res.status(err.status).send(err.msg);
        return;
    }

    fetch('https://github.com/login/oauth/access_token', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        body: new URLSearchParams({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: req.body.code,
            redirect_uri: process.env.WEB_URL + '/confirmGithub'
        })
    })
        .then(response => response.json())
        .then(async data => {
            if (data.access_token) {
                // req.user.github = {
                //     access_token: data.access_token
                // };
                githubUsr = {
                    userId : req.user.id,
                    access_token: data.access_token,
                };
                try {
                    me = await request("https://api.github.com/user", githubUsr, {})
                } catch (err) {
                    res.status(err.status).send(err.msg)
                    return
                }

                githubUsr.id = me.id;
                githubUsr.name = me.global_name;
                await dynamo
                    .client()
                    .put({
                        TableName: "GitHubUsers",
                        Item: githubUsr,
                    })
                    .promise();
                // if (!req.user.connected) req.user.connected = [];
                // req.user.connected.push("github");
                // await dynamo
                //     .client()
                //     .put({
                //         TableName: "Users",
                //         Item: req.user,
                //     })
                //     .promise();
                res.status(200).send({ msg: "ok" });
            }
            else {
                res.status(400).send({ msg: "Invalid code" });
            }
        })
        .catch(err => {
            console.error('Error:', err);
        });
    res.send("tg")
};


module.exports = Register;