import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);