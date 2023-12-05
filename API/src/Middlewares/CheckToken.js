const utils = require("../Utils");

const checkToken = async (req, res, next) => {
    let user;
    try {
        user = utils.decodeToken(req.headers.authorization);
        req.user = user;
    } catch (err) {
        res.status(err.status).json({ msg: err.msg });
        return;
    }
    next();
}

module.exports = checkToken;