const utils = require("../Utils");
const { v4: uuidv4 } = require("uuid");
const dynamo = require("../../DB");

const DelArea = async (req, res) => {
    try {
        utils.checkArgs(req.body, [
            "id",
        ]);
    } catch (err) {
        res.status(err.status).json({ msg: err.msg });
        return;
    }

    let data = await dynamo
        .client()
        .delete({
            TableName: "Area",
            Key: {
                "id": req.body.id
            }
        })
        .promise();

    if (data.Count == 0) {
        res.status(400).json({ msg: "Invalid id" });
        return;
    }
    res.status(200).json({ msg: "ok" });
}

module.exports = DelArea;