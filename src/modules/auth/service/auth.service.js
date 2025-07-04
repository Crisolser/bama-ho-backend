import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { methods as AdminRepository } from "../../../repository/admin.repository.js";
import { methods as Validator } from "../validators/auth.validator.js"
import error from "../../../helpers/error.constructor.js";
dotenv.config()

const getToken = async (credentials) => {
  Validator.loginParameters(credentials)

  const admin = await AdminRepository.getByCredentials(credentials)
  if(admin == null) throw error("Usuario no encontrado") 

  let permissions = await AdminRepository.getPermisions(admin.admin_id)
  let rolePermissions =  await AdminRepository.getRolePermisions(admin.admin_id)
  let permissionsList = permissions.map((row)=>row.name)
  let rolePermissionsList = rolePermissions.map((row)=>row.name)
  let allPermissions = [...new Set([...permissionsList,...rolePermissionsList])]
  
  var token = jwt.sign(
    {
      admin: admin,
      permissions: allPermissions,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3,
    },
    process.env.SECRETJWT
  );

  return token
}

export const methods = {
  getToken
};