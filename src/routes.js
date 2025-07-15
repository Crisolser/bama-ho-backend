import { Router } from "express";
import AuthRouter from "./modules/auth/router/auth.route.js";
import { methods as Auth } from "./middleware/auth.token.js"

const router = Router();

router.use("/login", AuthRouter);

router.use("/",Auth.AuthToken)
router.use("/admin", (req, res) => {
    res.status(200).json({
        message: "Admin route",
    });
});


export default router