const AWS = require("aws-sdk");

var client_ = null;

module.exports = {
    connect: function (callback) {
        AWS.config.update({
            region: 'eu-west-3',
            accessKeyId: process.env.DB_ACCESS_KEY,
            secretAccessKey: process.env.DB_SECRET_KEY
            // endpoint: process.env.DB_ENDPOINT,
        });
        client_ = new AWS.DynamoDB.DocumentClient();
        callback();
    },
    client: function () {
        return client_;
    },
};
