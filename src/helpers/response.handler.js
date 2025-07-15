import dotenv from "dotenv";
dotenv.config();

const successHandler = async (req,res,{message,additionalData,statusCode}) => {
  if(!statusCode) statusCode = 200
  let response = {
    message,
    ...additionalData
  }

  res.status(statusCode).json(response);
  return;
};


export const methods = {
  successHandler,
  errorHandler,
};