import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const startServer = async () => {
  await connectDB();

  app.use(cors());
  app.use(express.json());

  app.use("/api/tasks", taskRoutes);

  app.get("/", (req, res) => {
    res.send("Backend Working");
  });

  app.post("/api/tasks", (req, res) => {
    res.send("Create Task");
  });

  app.put("/api/tasks/:id", (req, res) => {
    res.send("Update Task");
  });

  app.delete("/api/tasks/:id", (req, res) => {
    res.send("Delete Task");
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
