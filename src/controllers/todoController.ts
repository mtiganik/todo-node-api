import Todo from "../models/todoModel";
import { Request, Response } from "express";


/**
 * @route   GET /api/todos
 * @desc    Get all todos
 * @access  Public
 */
export async function getTodos(req: Request, res: Response) {
  console.log("Fetching all todos");
  const todos = await Todo.find();
  res.json(todos);
};

/**
 * @route   POST /api/todos
 * @desc    Create a new todo
 * @access  Public
 */
export async function createTodo(req: Request, res: Response) {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
};

/**
 * @route   GET /api/todos/:id
 * @desc    Get a todo by ID
 * @access  Public
 */
export async function getTodoById(req: Request, res: Response) {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
};
/**
 * @route   PUT /api/todos/:id
 * @desc    Update a todo by ID
 * @access  Public
 */
export async function updateTodo(req: Request, res: Response) {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
};

/**
 * @route   DELETE /api/todos/:id
 * @desc    Delete a todo by ID
 * @access  Public
 */
export async function deleteTodo(req: Request, res: Response) {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json({ message: "Todo deleted successfully" });
};