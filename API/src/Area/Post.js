const utils = require("../Utils");
const { v4: uuidv4 } = require("uuid");
const dynamo = require("../../DB");

const PostArea = async (req, res) => {
    try {
        utils.checkArgs(req.body, [
            "action",
            "app",
            "reactions",
        ]);
    } catch (err) {
        res.status(err.status).json({ msg: err.msg });
        return;
    }

    for (let i = 0; i < req.body.reactions.length; i++) {
        if (!req.body.reactions[i].app || !req.body.reactions[i].reaction) {
            res.status(400).json({ msg: "Invalid reaction" });
            return;
        }
    }

    let area = {
        id : uuidv4(),
        action : req.body.action,
        reactions : req.body.reactions,
        userId : req.user.id
    }

    await dynamo
        .client()
        .put({
            TableName: "Area",
            Item: area,
        })
        .promise();
    res.status(201).json({ msg: "ok" });
}

module.exports = PostArea;