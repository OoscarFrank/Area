const dynamo = require("../../DB");

const getServices = (req, res) => {
    res.send(dynamo.services());
}

module.exports = {getServices};