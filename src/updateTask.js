const BD = require('./persistence/index')
const response = require("./helpers/response");
const status = require("./constans/statusCode");

const updateTask = async (event) => {
    const { id } = event.pathParameters;

    const { done } = JSON.parse(event.body);

    await BD.dynamodb
        .update({
            TableName: process.env.DYNAMODB_TABLE,
            Key: { id },
            UpdateExpression: "set done = :done",
            ExpressionAttributeValues: {
                ":done": done,
            },
            ReturnValues: "ALL_NEW",
        })
        .promise();

    return response.setStatus(status.STATUSCODE_200, JSON.stringify({
        message: "task updated",
    }),);

};

module.exports = {
    updateTask,
};
