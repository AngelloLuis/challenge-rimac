const response = require("./helpers/response");
const status = require("./constans/statusCode");
const BD = require('./persistence/index')

const getTasks = async (event) => {

  const result = await BD.dynamodb.scan({ TableName: process.env.DYNAMODB_TABLE }).promise();

  const tasks = result.Items;

  return response.setStatus(status.STATUSCODE_200, {
    tasks,
  });

};

module.exports = {
  getTasks,
};
