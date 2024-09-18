import mongoose from "mongoose";

/**
 * Represents the schema for a user in the application.
 * @remarks This schema contains the data of the user that is publicly available to other users
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 40,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImg: {
    type: String,
    default:
      "https://res.cloudinary.com/dxxxkeonq/image/upload/v1705631570/website/xgolsvu8xejzsqj8jjku.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

  password: {
    type: String,
    min: 8,
    max: 20,
  },
});

export default mongoose.model("User", UserSchema);
