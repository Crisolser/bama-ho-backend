import express from "express";
import cors from "cors";
import morgan from "morgan";
import AWSXRay from "aws-xray-sdk";
import http from "http";
import syntaxError from "./middleware/syntax.error.js";
import errorHandler from "./middleware/general.error.js";
import AllRoutes from "./routes.js";

const app = express();

AWSXRay.captureHTTPsGlobal(http);

//Princial Middlewares
app.use(AWSXRay.express.openSegment("ho-api-test"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(syntaxError);

//Principal routes
app.use("/api", AllRoutes);

//Not Fount handler
app.use("/", (req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.use(AWSXRay.express.closeSegment());
//Error handler
app.use(errorHandler);


export default app;