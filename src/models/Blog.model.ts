import mongoose from "mongoose";
import { MIN_TITLE_LENGTH, MAX_LENGTH_META_DESCRIPTION, MIN_LENGTH_META_DESCRIPTION } from "../constants/index";
import { FileSchema } from "./File.model";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: MIN_TITLE_LENGTH,
    },
    body: {
        type: String,
        required: true,
    },
    thumbnail: FileSchema,
    images: {
        type: String,

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    metaDescription: {
        type: String,
        required: true,
        min: MIN_LENGTH_META_DESCRIPTION,
        max: MAX_LENGTH_META_DESCRIPTION,
    },
    tags: {
        type: [String],
        required: true,
    },
},
    {
        timestamps: true,
        collection: "blogs",
    }
);
export default mongoose.models.BlogSchema ||
    mongoose.model("BlogSchema", BlogSchema);