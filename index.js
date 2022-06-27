const data = require('data-layer');

/**
 * Main handler that retrieves a key-value pair from a large data
 * module. Locally, this package is symlinked from './layer'. When
 * deployed, this package is required directly from the layer.
 *
 * @param event {import('aws-lambda').APIGatewayProxyEventV2}
 * @returns {import('aws-lambda').APIGatewayProxyResultV2}
 * */
module.exports.handler = async event => {
  const id = event.queryStringParameters?.id;

  if (!id || !data[id]) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Id not found' }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        input: id,
        output: data[id],
      },
    }),
  };
};
