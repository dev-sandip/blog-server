import { Router } from "express";
import BlogController from "../controllers/blogController";
import { singleFileUpload } from "../middlewares/multer.config";
import { verifyToken } from "../utils/token-manager";

const blogRouter = Router();

blogRouter.post("/create", verifyToken, singleFileUpload, BlogController.CreateBlog);
blogRouter.get("/", BlogController.GetAllBlogs);
blogRouter.get("/:id", BlogController.getSingleBlog);
blogRouter.delete("/:id", verifyToken, BlogController.deleteBlog);
export default blogRouter;