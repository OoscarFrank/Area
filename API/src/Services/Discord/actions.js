const router = require("../Router");
const db = require("../../../DB");

const getUserByDiscordId = async (id) => {
    let params = {
        TableName: "DiscordUsers",
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

const messageReceive = () => {
    db.discordClient().on("messageCreate", async (message) => {
        if (message.author.id === "1183779111005597766") return;

        let user = await getUserByDiscordId(message.author.id);
        if (user == null) return;
        if (message.channel.type == 1) {
            router("discordReceiveMp", user);
            return;
        }
        if (message.channel.type == 0) {
            router("discordReceiveServer", user);
            return;
        }
    });
};

const DiscordActions = () => {
    messageReceive();
};

module.exports = DiscordActions;
