import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);