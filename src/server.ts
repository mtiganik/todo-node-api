import express from "express";
import { config } from 'dotenv';
import { connectDB } from "./config/database";
import todoRoutes from "./routes/todoRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes"
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from "./config/swagger";

config();

async function start() {

  try {
    const app = express();

    connectDB().catch((error) => {
      console.error("Failed to connect to database:", error);
      process.exit(1);
    });
    app.use(express.json()); // JSON body parser
    const swaggerSpec = swaggerJSDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
    // Routes
    app.use("/api/todos", todoRoutes);
    app.use("/api/users", userRoutes);
    app.use("/api/auth",  authRoutes);
    app.get("/test", (req, res) => res.send("Test route works!"));
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}/api-docs`));
  }catch (error) {
    console.error("Error starting server:", error);
  }
}
start();