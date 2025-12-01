import User from "../models/userModel"
import bcrypt from "bcrypt";
import { createToken } from "./jwtService";

export const registerUser = async ( name:string, email: string, password:string) => {
  const userExists = await User.findOne({email})
  if (userExists) throw new Error("Email already registered");
  const hashedPassword = await bcrypt.hash(password, 10);
  if(!name) name = email.split("@")[0]

  const user = await User.create({name,email,password:hashedPassword});
  return {user, token: createToken(user._id.toString())}
};

export const loginUser = async(email:string, password:string) => {
  const user = await User.findOne({email}).select("+password");
  if (!user) throw new Error("Invalid credentials")
  const match = await bcrypt.compare(password, user.password)
  if (!match) throw new Error("Invalid credentials");
  return {user, token: createToken(user._id.toString())}
};

export const logOutUser = () => {
  return {message:"Succesfully logged out"}
};