import type { Request, Response } from "express";
import Task from "../models/Task.js";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();

  res.status(200).json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const task = await Task.create(req.body);

  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  await Task.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Task deleted",
  });
};
