const utils = require("../../Utils");
const dynamo = require("../../../DB");

const postWebhook = async (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: "Data received and processed" });
}

module.exports = postWebhook;
