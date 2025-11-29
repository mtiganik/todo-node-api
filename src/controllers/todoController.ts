import Todo from "../models/todoModel";
import { Request, Response } from "express";


/**
 * @route   GET /api/todos
 * @desc    Get all todos
 * @access  Public
 */
export async function getTodos(req: Request, res: Response) {
  const todos = await Todo.find();
  res.json(todos);
};

export async function createTodo(req: Request, res: Response) {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
};
