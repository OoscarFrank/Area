const utils = require("../../Utils");
const dynamo = require("../../../DB");

const postWebhook = async (req, res) => {
    const data = req.body;

    const boardName = data.model.name;
    const actionType = data.action.type;
    const actionDate = data.action.date;
    const memberCreatorName = data.action.memberCreator.fullName;

    console.log(`Board Name: ${boardName}`);
    console.log(`Action Type: ${actionType}`);
    console.log(`Action Date: ${actionDate}`);
    console.log(`Member Creator Name: ${memberCreatorName}`);

    res.status(201).json({ message: "Data received and processed" });
}

module.exports = postWebhook;
