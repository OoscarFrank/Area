const utils = require("../Utils");
const dynamo = require("../../DB");

const GetArea = async (req, res) => {

    const params = {
        TableName: "Area",
        IndexName: "userId",
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": req.user.id,
        },
    };

    let data = await dynamo.client().query(params).promise();

    if (data.Count == 0)
        return res.status(200).json({ msg: "ok", data: [] });
    res.status(200).json({ msg: "ok", data: data.Items });
    return;
};

module.exports = GetArea;