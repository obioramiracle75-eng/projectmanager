import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tag: {
      type: String,
      enum: ["Urgent", "Important", "Personal"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Task", taskSchema);
