const AWS = require("aws-sdk");

var client_ = null;

module.exports = {
    connect: function (callback) {
        AWS.config.update({
            region: "local",
            endpoint: process.env.DB_ENDPOINT,
        });
        client_ = new AWS.DynamoDB.DocumentClient();
        callback();
    },
    client: function () {
        return client_;
    },
};
