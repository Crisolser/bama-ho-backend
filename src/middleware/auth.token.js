import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { methods as Response } from "../helpers/response.handler.js";

dotenv.config();

const AuthToken = async (req, res, next) => {
  const Headers = req.headers;
  const Token = Headers.authorization;
  const Secret = process.env.SECRETJWT;

  if (!Token) {
    Response.errorHandler(
      req,
      res,
      {
        statusCode: 401,
        message: "El token de autentificación es necesario",
      }
    );
    return;
  } else if (!Token.startsWith("Bearer ")) {
    Response.errorHandler(
      req,
      res,
      {
        statusCode: 401,
        message: "El token debe ser un Bearer token",
      }
    );
    return;
  } else {
    try {
      const CorrectToken = Token.substring(7, Token.length);
      const Jwtdecoded = jwt.verify(CorrectToken, Secret);
      req.user = Jwtdecoded.admin;
      req.user_permissions = Jwtdecoded.permissions;
      next();
    } catch (Err) {
      Response.errorHandler(
        req,
        res,
        {
          statusCode: 403,
          message: Err.message,
        }
      );
      return;
    }
  }
};

export const methods = {
  AuthToken,
};