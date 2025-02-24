import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const main = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Starting to working with AWS Lambda Functions" }),
  };
};
