import express from "express";
import {config} from 'dotenv';
import {connectDB} from "./config/database";
import todoRoutes from "./routes/todoRoutes";
import userRoutes from "./routes/userRoutes";


config();
const app = express();
app.use(express.json()); // JSON body parser

connectDB();

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
