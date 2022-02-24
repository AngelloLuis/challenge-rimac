const {v4} = require("uuid");
const BD = require('./persistence/index')

const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");

const response = require('./helpers/response');
const status = require('./constans/statusCode');

const ModelTask = require('./models/task')

const addTask = async (event) => {

    const {title, description} = event.body;
    const createdAt = new Date();
    const id = v4();

    const newTask = ModelTask.taskSchema(id, title, description, createdAt)

    await BD.dynamodb
        .put({
            TableName: process.env.DYNAMODB_TABLE,
            Item: newTask.Item,
        })
        .promise();

    return response.setStatus(status.STATUSCODE_200, JSON.stringify(newTask));

};

module.exports = {
    addTask: middy(addTask).use(httpJSONBodyParser()),
};
