import { Router } from "express";
import { getTodos, createTodo, deleteTodo, updateTodo, getTodoById} from "../controllers/todoController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID of the todo
 *         title:
 *           type: string
 *           description: The todo title
 *         description:
 *           type: string
 *           description: Optional description
 *         completed:
 *           type: boolean
 *           description: Is the todo completed?
 *         userId:
 *           type: string
 *           description: ID of the user who owns the todo
 *       example:
 *         id: "65a123efc341234d45677ab1"
 *         title: "Finish API documentation"
 *         description: "Write Swagger annotations"
 *         completed: false
 *         userId: "64f15d3ae2b91400126e91b5"
 * 
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID
 *         name:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *         id: "64f15d3ae2b91400126e91b5"
 *         name: "John Doe"
 *         email: "john@example.com"
 */



/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of todos
 */
router.get("/", getTodos);

/**
 * @swagger
 * /api/todos/:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     parameters:
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Created successfully
 *       404:
 *         description: Todo not found
 */
router.post("/", createTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     summary: Get a single todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo ID
 *     responses:
 *       200:
 *         description: Todo found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 */
router.get("/:id", getTodoById);


/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Todo not found
 */
router.put("/:id", updateTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Todo not found
 */
router.delete("/:id", deleteTodo);



export default router;
