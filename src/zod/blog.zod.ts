import { z } from "zod";
import {
  MIN_TITLE_LENGTH,
  MAX_LENGTH_META_DESCRIPTION,
  MIN_LENGTH_META_DESCRIPTION,
} from "../constants/index";

export const BlogSchema = z.object({
  title: z.string().min(MIN_TITLE_LENGTH, {
    message: `Title must be at least ${MIN_TITLE_LENGTH} characters long`,
  }),
  metaDescription: z
    .string()
    .min(MIN_LENGTH_META_DESCRIPTION, {
      message: `Meta description must be at least ${MIN_LENGTH_META_DESCRIPTION} characters long`,
    })
    .max(MAX_LENGTH_META_DESCRIPTION, {
      message: `Meta description must not exceed ${MAX_LENGTH_META_DESCRIPTION} characters`,
    }),
  images: z.string().optional().nullish(),
  thumbnail: z.string().optional().nullish(),
  body: z.string().min(1, {
    message: "Body content is required",
  }),
  tags: z.array(z.string()).min(1, {
    message: "At least one tag is required",
  }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type IBlog = z.infer<typeof BlogSchema>;