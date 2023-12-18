const utils = require("../../Utils");
const dynamo = require("../../../DB");

const Register = async (req, res) => {
    try {
        utils.checkArgs(req.body, ["token"]);
    } catch (err) {
        res.status(err.status).send(err.msg);
        return;
    }
    let me =  await fetch(`https://api.trello.com/1/tokens/${req.body.token}/member?key=${process.env.TRELLO_KEY}&token=${req.body.token}`)

    if (me.status !== 200) {
        res.status(400).send({ msg: "Invalid token" });
        return;
    }

    me = await me.json()


    let trelloUser = {
        token: req.body.token,
        id: me.id,
        fullName: me.fullName,
        userId: req.user.id,
    };

    try {
        await dynamo
            .client()
            .put({
                TableName: "TrelloUsers",
                Item: trelloUser,
            })
            .promise();
        res.status(200).send({ msg: "ok" });
    } catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
};

module.exports = Register;