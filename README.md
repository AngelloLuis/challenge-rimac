# Star War API

### Installation

Instale módulos npm.

```sh
npm install
```

### Setup Environment

Realice una copia del archivo de variables de entorno `(.env)` y configure las variables correspondientes.
Considere *NODE_ENV* con el valor *"development"* `(Por defecto tendrá este valor)`.
```
SWAPI_URL=https://swapi.py4e.com/api/
DYNAMODB_TABLE=ChallengeRimac
httpApiGatewayEndpointId=llmlku78r4.execute-api.us-west-2
```
Será necesario crear una base de datos dynamo DB en AWS "ChallengeRimac"

```sql
ADD arn:aws:dynamodb:us-west-2:278881257148:table/ChallengeRimac in Resource serverless.yml
```

### Integration with [SWAPI](https://swapi.py4e.com/documentation)

Dada la arquitectura señalada en el reto, será necesario especiar un API para la integración. Este endpoint podrá especificarse en la variable de entorno *SWAPI_URL* del archivo de configuración `.env`. El que usaremos en este proyecto será `https://swapi.py4e.com/api/`

![Arquitectura](https://i.ibb.co/nbdHq5C/arquitectura.jpg)

### Serverless plugins

Plugins de serverless utilizados

| Plugin | Stats |
|:---------------------------|:-----------:|
| **[`serverless-dotenv-plugin`](https://github.com/neverendingqs/serverless-dotenv-plugin)** serverless-dotenv-plugin

### Resources
Los recursos implementados son los siguientes:

- films

| resource      | description                       |
|:--------------|:----------------------------------|
| `api/films`      | Listado de peliculas. |

You can operate on resources using HTTP methods such as `GET`.

Configurando adecuadamente las AWS Credentials, el comando `sls deploy` debería desplegar las API's correctamente.
