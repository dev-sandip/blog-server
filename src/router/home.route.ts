import { Router } from "express";
import { Request, Response } from "express";
const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to the Backend using TypeScript!",
    data: {
      github: "dev-sandip",
      name: "Sandip Sapkota",
      age: 20,
      role: "Backend Developer",
      exprience: " 3 months",
      apiStatus: "Active",
      isHealthy: true,
    },
  });
});

export default homeRouter;
