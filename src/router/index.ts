import { Router } from "express";
import homeRouter from "./home.route";
import authRouter from "./auth.route";
import blogRouter from "./blog.route";

const appRouter = Router();

appRouter.use("/", homeRouter);
appRouter.use("/auth", authRouter);
appRouter.use("/blog", blogRouter);

export default appRouter;
