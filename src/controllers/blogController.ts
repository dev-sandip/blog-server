import { NextFunction, Request, Response } from "express";
import { BlogSchema, IBlog } from "../zod/blog.zod";
import ResponseController from "./ResponseController";
import BlogModel from "../models/Blog.model";
import getDataUri from "../utils/getDataUri";
import { deleteImage, uploadImage } from "../utils/handleImage";
import UserModel from "../models/User.model";



class BlogController {
  public static CreateBlog = async (req: Request, res: Response) => {
    try {
      const blogData = BlogSchema.parse(req.body);
      const authorId = res.locals.jwtData.id;
      const file = req.file;
      const thumbnail = file
        ? await uploadImage(getDataUri(file).content, getDataUri(file).fileName, "blog-thumbnails")
        : {};
      const newBlog = new BlogModel({ ...blogData, thumbnail, author: authorId });
      await newBlog.save();
      return ResponseController.HandleSuccessResponse(res, {
        status: 201,
        message: "Blog created successfully!",
        data: newBlog,
      })
    } catch (error) {
      return ResponseController.Handle500Error(res, error);
    }
  };

  public static GetAllBlogs = async (req: Request, res: Response) => {
    try {
      const blogs = await BlogModel.find().populate({
        path: 'author', // populate the authorId reference
        select: 'name profileImg', // select specific fields from the User model
      })
        .exec();

      return ResponseController.HandleSuccessResponse(res, {
        status: 200,
        message: "All blogs fetched successfully!",
        data: blogs,
      })
    } catch (error) {
      return ResponseController.Handle500Error(res, error);
    }
  };
  public static getSingleBlog = async (req: Request, res: Response) => {
    try {
      const blog = await BlogModel.findById(req.params.id).populate({
        path: 'author', // populate the authorId reference
        select: 'name profileImg', // select specific fields from the User model
      })
        .exec();
      return ResponseController.HandleSuccessResponse(res, {
        status: 200,
        message: "Blog fetched successfully!",
        data: blog,
      })
    } catch (error) {
      return ResponseController.Handle500Error(res, error);
    }
  };



  public static deleteBlog = async (req: Request, res: Response) => {
    try {
      let blog = await BlogModel.findById(req.params.id);
      if (!blog) {
        return ResponseController.Handle404Error(res, []);
      }

      const authorId = res.locals.jwtData.id;
      if (authorId !== blog.authorId) {
        return res.status(401).json({
          status: 401,
          message: "Unauthorized",
        })
      }
      blog.thumbnail && await deleteImage(blog.thumbnail.fileId);
      await blog.deleteOne();
      return ResponseController.HandleSuccessResponse(res, {
        status: 204,
        message: "Blog deleted successfully!",
        data: blog,
      })
    } catch (error) {
      return ResponseController.Handle500Error(res, error);
    }
  }
}


export default BlogController;
