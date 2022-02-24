const axios = require('axios');
require('dotenv').config();
/*const { I18n } = require('i18n')*/
/*const i18n = new I18n({
    locales: ['en', 'de'],
    directory: path.join(__dirname, 'locales')
})*/

const getFilmsSwapi = async (event) => {

    const {id} = event.pathParameters;

    const responseSwapi =  await getFilms(id);

    console.log("responseSwapi PROMISE", responseSwapi)

    return {
        statusCode: 200,
        body: responseSwapi
    }
}

const getFilms = (id) => {

    const requestURL = `${process.env.SWAPI_URL}films/${id}/`
    return new Promise(async (resolve, reject) => {
        const response = await axios.get(requestURL);
        resolve(response.data)
    })
}

module.exports = {
    getFilmsSwapi
}
