const dynamo = require("../../DB");

const getServices = (req, res) => {
    res.send(dynamo.services());
}

const getMe = (req, res) => {
    delete req.user.password;
    delete req.user.checkoutId
    res.send({"msg" : "ok", "data" : req.user});
}

module.exports = {getServices, getMe};