const { default: axios } = require('axios');
const {v4} = require("uuid");
require('dotenv').config();

axios.defaults.baseURL =
    `https://${process.env.httpApiGatewayEndpointId}.amazonaws.com`

describe('createItem function', () => {
    it('should respond with statusCode 200 to correct request', async () => {
        // GIVEN
        const payload = {
            id: v4(),
            title: "hola",
            description: "hola",
            createdAt: Date.now()
        }

        // WHEN
        const actual = await axios.post('/tasks', payload)

        // THEN
        expect(actual.status).toBe(200)
    })
})
