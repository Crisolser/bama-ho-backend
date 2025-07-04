import { methods as User } from "../service/auth.service.js"
import { methods as Response } from "./../../../helpers/response.handler.js";

const getUserToken = async (req, res, next) => {
  try {
    const token = await User.getToken(req.body)
    const message = "Token generado"
    const additionalData = {token}

    Response.successHandler(req,res,{message, additionalData});
    return;
  } 
  catch (error) {
    next(error)
  }
};

export const methods = {
  getUserToken,
};