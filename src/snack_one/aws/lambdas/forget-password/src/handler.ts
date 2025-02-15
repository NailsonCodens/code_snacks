import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const main = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Microserviço rodando na AWS Lambda!" }),
  };
};
