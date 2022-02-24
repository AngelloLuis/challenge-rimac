
const response = require("./helpers/response");
const status = require("./constans/statusCode");
const BD = require('./persistence/index')

const getTask = async (event) => {

  const { id } = event.pathParameters;

  const result = await BD.dynamodb
    .get({
      TableName: process.env.DYNAMODB_TABLE,
      Key: { id },
    })
    .promise();

  const task = result.Item;

  return response.setStatus(status.STATUSCODE_200, task);

};

module.exports = {
  getTask,
};
