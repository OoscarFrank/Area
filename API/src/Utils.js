const fs = require("fs");
const jwt = require("jsonwebtoken");

const readJSON = (path) => {
    try {
        let fullpath = path;
        if (fs.existsSync(fullpath)) {
            let obj = fs.readFileSync(fullpath, "utf8");
            let ret = JSON.parse(obj);
            return ret;
        } else {
            return null;
        }
    } catch (err) {
        throw err;
    }
};

const checkArgs = (data, args) => {
    for (let i = 0; i < args.length; ++i) {
        if (data[args[i]] == null || data[args[i]] == undefined) {
            throw { status: 400, msg: "Missing parameter : " + args[i] };
        }
    }
};

const encodeToken = (user) => {
    let toEncode = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdTime: user.createdTime,
    };
    let token = jwt.sign(toEncode, process.env.SECRET);
    return token;
};

const decodeToken = (token) => {
    if (!token) throw { status: 400, msg: "No Token" };
    token = token.replace("Bearer ", "");
    let out;
    try {
        out = jwt.verify(token, process.env.SECRET);
    } catch (err) {
        throw { status: 401, msg: "Invalid Token" };
    }
    return out;
};

module.exports = { readJSON, checkArgs, encodeToken, decodeToken };
