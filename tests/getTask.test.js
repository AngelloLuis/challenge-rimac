const { default: axios } = require('axios');
const {v4} = require("uuid");
require('dotenv').config();

axios.defaults.baseURL =
    `https://${process.env.httpApiGatewayEndpointId}.amazonaws.com`

describe('createItem function', () => {
    it('should respond with statusCode 200 to correct request', async () => {
        // GIVEN
        const payload = {
            "status": "200",
            "body": {
                "createdAt": {},
                "description": "estoy insertando esta data aqui",
                "id": "d436a327-bcf6-495d-93cb-76ff16e8eac0",
                "title": "data numero 5"
            }
        }

        // WHEN
        const actual = await axios.get('/tasks/d436a327-bcf6-495d-93cb-76ff16e8eac0')

        console.log(actual.data.body);

        // THEN
        expect(actual.data.body).toEqual(payload.body)
    })
})
