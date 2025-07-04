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

const errorHandler = (req,res,error) => {
  let {statusCode,message,additionalData} = error
  if(!statusCode) statusCode=500
  if(!message) message="Internal server error"
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