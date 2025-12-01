import Todo from "../models/todoModel";
import { Request, Response } from "express";


/**
 * @route   GET /api/todos
 * @desc    Get all todos
 * @access  Public
 */
export async function getTodos(req: Request, res: Response) {

  const todos = await Todo.find({ userId: req.user!.id });
  res.json(todos);
};

/**
 * @route   POST /api/todos
 * @desc    Create a new todo
 * @access  Public
 */
export async function createTodo(req: Request, res: Response) {
  // ...req.body, 
  const todo = await Todo.create({ 
    title: req.body.title,
    completed: req.body.completed ?? false,
    userId: req.user!.id 
  });
  res.status(201).json(todo);
};

/**
 * @route   GET /api/todos/:id
 * @desc    Get a todo by ID
 * @access  Public
 */
export async function getTodoById(req: Request, res: Response) {
  const todo = await Todo.findOne({ _id: req.params.id, userId: req.user!.id });
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
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.user!.id },
    req.body,
    { new: true }
  );
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
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user!.id });
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json({ message: "Todo deleted successfully" });
};