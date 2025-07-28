import { Router } from "express";
import AuthRouter from "./modules/auth/router/auth.route.js";
import { methods as Auth } from "./middleware/auth.token.js";
import { methods as Response } from "./helpers/response.handler.js" 

const router = Router();

router.use("/login", AuthRouter);
router.use("/",Auth.AuthToken)
router.use("/admin", (req, res) => {
    Response.successHandler(req,res,{message: "Admin route"});
});
router.use("/role", (req, res) => {
    Response.successHandler(req,res,{message: "Role route"});
});
router.use("/permission", (req, res) => {
    Response.successHandler(req,res,{message: "Permission route"});
});


export default router