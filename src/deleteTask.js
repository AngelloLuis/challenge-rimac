const response = require("./helpers/response");
const status = require("./constans/statusCode");
const BD = require('./persistence/index');

const deleteTask = async (event) => {
  const { id } = event.pathParameters;

  await BD.dynamodb
    .delete({
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id,
      },
    })
    .promise();

  return response.setStatus(status.STATUSCODE_200, {
      message: 'Deleted Task'
  });

};

module.exports = {
  deleteTask,
};
