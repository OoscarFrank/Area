const utils = require("../Utils");
const { v4: uuidv4 } = require("uuid");
const dynamo = require("../../DB");

const ToggleArea = async (req, res) => {
    try {
        utils.checkArgs(req.body, [
            "id",
            "active"
        ]);
    } catch (err) {
        res.status(err.status).json({ msg: err.msg });
        return;
    }

    const params = {
        TableName: "Area",
        Key : {
            "id" : req.body.id
        }
    };

    let data = await dynamo.client().get(params).promise();

    if (data.Count == 0) {
        res.status(400).json({ msg: "Invalid id" });
        return;
    }

    let area = data.Item;
    area.active = req.body.active;

    await dynamo
        .client()
        .put({
            TableName: "Area",
            Item: area,
        })
        .promise();
    res.status(200).json({ msg: "ok" });
}

module.exports = ToggleArea;