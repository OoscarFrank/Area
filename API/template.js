const dotenv = require("dotenv");
const path = require("path");
var dynamo = require("./DB");
const AWS = require("aws-sdk");

dotenv.config({ path: path.join(__dirname, ".env") });

dynamo.connect(() => {
    const dynamodb = new AWS.DynamoDB();

    const params = {
        TableName: "Users",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" },
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "S" },
            { AttributeName: "email", AttributeType: "S" },
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
        },
        GlobalSecondaryIndexes: [
            {
                IndexName: "Email",
                KeySchema: [{ AttributeName: "email", KeyType: "HASH" }],
                Projection: {
                    ProjectionType: "ALL",
                },
                ProvisionedThroughput: {
                    ReadCapacityUnits: 1,
                    WriteCapacityUnits: 1,
                },
            },
        ],
    };

    dynamodb.createTable(params, (err, data) => {
        if (err) {
            console.error(
                "Unable to create table. Error JSON:",
                JSON.stringify(err, null, 2)
            );
        } else {
            console.log("done")
        }
    });

});