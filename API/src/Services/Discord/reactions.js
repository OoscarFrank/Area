const db = require("../../../DB");

const discordSendMp = async (user, message = "An action have been triggered") => {
    if (!user || !user.id) {
        return;
    }
    let params =  {
        TableName: "DiscordUsers",
        IndexName: "userId",
        KeyConditionExpression: "userId = :n",
        ExpressionAttributeValues: {
            ":n": user.id,
        },
    };
    let tmpUser = await db.client().query(params).promise();
    if (tmpUser.Count == 0) return;
    let discordUser = tmpUser.Items[0];

    db.discordClient()
        .users.fetch(discordUser.id)
        .then((user) => {
            user.send(message);
        })
        .catch(console.error);
};


module.exports = { discordSendMp };