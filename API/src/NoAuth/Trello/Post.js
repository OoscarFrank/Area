const utils = require("../../Utils");
const dynamo = require("../../../DB");
const router = require("./../../Services/Router");

const getUserByTrelloId = async (id) => {
    let params = {
        TableName: "TrelloUsers",
        Key: {
            id: id,
        },
    };
    let tmpUser = await db.client().get(params).promise();
    if (tmpUser.Count == 0) return null;

    let user = tmpUser.Item;
    if (!user) return null;
    if (!user.userId) return null;
    params = {
        TableName: "Users",
        Key: {
            id: user.userId,
        },
    };
    tmpUser = await db.client().get(params).promise();
    if (tmpUser.Count == 0) return null;
    user = tmpUser.Item;
    return user;
};

const postWebhook = async (req, res) => {
    const data = req.body;
    const actionType = data.action.type;

    if (data.action.type == "createCard") {
        let user = await getUserByTrelloId(data.action.memberCreator.id);
        if (!user) return;
        router("trelloCreateCard", user);
    }

    // const boardName = data.model.name;
    // const actionType = data.action.type;
    // const actionDate = data.action.date;
    // const memberCreatorName = data.action.memberCreator.fullName;

    // console.log(`Board Name: ${boardName}`);
    // console.log(`Action Type: ${actionType}`);
    // console.log(`Action Date: ${actionDate}`);
    // console.log(`Member Creator Name: ${memberCreatorName}`);

    res.status(201).json({ message: "Data received and processed" });
}

module.exports = postWebhook;
