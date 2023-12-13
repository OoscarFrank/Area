const utils = require("../../Utils");
const dynamo = require("../../../DB");

const Register = async (req, res) => {
    try {
        utils.checkArgs(req.body, ["token"]);
    } catch (err) {
        res.status(err.status).send(err.msg);
        return;
    }
    req.user.trello = {
        token: req.body.token,
    };

    try {
        await dynamo
            .client()
            .put({
                TableName: "Users",
                Item: req.user,
            })
            .promise();
        res.status(200).send({ msg: "ok" });
    } catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
};

module.exports = Register;
