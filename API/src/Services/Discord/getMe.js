
const request = require("./request")

const getMe = (req, res) => {
    request("https://discord.com/api/users/@me", {}, (data, err) => {
        if (err) {
            console.log(err)
            return 
        } else {

        }
    })
}

module.exports = getMe;