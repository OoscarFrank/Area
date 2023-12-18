const db = require("../../../DB");

const TrelloCreateNewBoard = async (user, boardName = "New board") => {
    const params = {
        TableName: "TrelloUsers",
        Key: {
            id: user.id,
        },
    };
    let tmpUser = await db.client().get(params).promise();
    if (tmpUser.Count == 0) return null;

    let trelloUser = tmpUser.Item;
    if (!trelloUser) return null;
    if (!trelloUser.token) return null;

    await fetch(`https://api.trello.com/1/boards/?name=${boardName}&key=${process.env.TRELLO_KEY}&token=${trelloUser.token}`)
};

module.exports = { TrelloCreateNewBoard };