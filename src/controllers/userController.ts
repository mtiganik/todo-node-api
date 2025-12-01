import User from "../models/userModel";
import { Request, Response } from "express";


  const Users=[{
    name: "Demo User",
    email: "demo@example.com"
  },
  {
    name: "Test User", 
    email: "test@example.com"
  }]

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @access  Public
 */
export async function getUsers(req: Request, res: Response) {
  const users = await User.find();
  res.json(users);
}

export async function createUser(req: Request, res: Response) {
  const user = await User.create(req.body);
  res.status(201).json(user);
}
export async function getUserById(req: Request, res: Response) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};
export async function updateUser(req: Request, res: Response) { 
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};
export async function deleteUser(req: Request, res: Response) {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ message: "User deleted successfully" });
};