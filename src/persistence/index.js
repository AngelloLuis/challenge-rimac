
const AWS = require("aws-sdk");

//Se puede aplicar singleton y optimizar mejor el uso de la BD
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    dynamodb
}
