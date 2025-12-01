import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "yoursecretkey";
const EXPIRES_IN = "24h"

export const createToken = (userId: string) => {
  return jwt.sign({id: userId}, JWT_SECRET, {expiresIn: EXPIRES_IN})
}