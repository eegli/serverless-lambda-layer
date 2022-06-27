# Serverless Lambda Layer

A minimal template for a `serverless` AWS Lambda deployment with layers and function URLs that can be invoked locally.

- The layer holds a module that exports a large JSON file with random test data
- When invoked locally, the layer's `data-layer` module is resolved via a symlink to `layer/nodejs/node_modules/data-layer`

## Function URL schema

- Request and response format according to `APIGatewayProxyEventV2` / `APIGatewayProxyResultV2`: https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html
- `pathParameters` and `stageVariables` are **not** supported by function URLs

## Layer creation

- https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html
