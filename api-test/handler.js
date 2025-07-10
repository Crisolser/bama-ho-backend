import serverless from "serverless-http";
import app from "./src/app.js";

export const handler = serverless(app,{
    request:{
        // This is necessary to parse the body correctly when using API Gateway
        // with Lambda Proxy Integration
        parseBody: true,
        json: true,
        urlencoded: true,
    }
});
