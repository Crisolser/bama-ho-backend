import { Router } from "express";
import AuthRouter from "./modules/auth/router/auth.route.js";

const router = Router();

router.use("/login", AuthRouter);
router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API",
    });
});

export default router