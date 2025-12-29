// routes/userRoutes.js
import express from "express";
import { create, deleteUser, fetch, update, fetchByID } from "../controller/userController.js";

const route = express.Router();

/**
 * @swagger
 * /api/user/getAll:
 *   get:
 *     summary: Retrieve all users
 *     description: Fetches a list of all users in the database.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users found.
 */
route.get("/getAll", fetch);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Fetch a single user using the user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
route.get("/:id", fetchByID);


/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     description: Adds a new user to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User created successfully.
 *       400:
 *         description: User already exists.
 */
route.post("/", create);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update an existing user
 *     description: Updates a user's information based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User updated successfully.
 *       404:
 *         description: User not found.
 */
route.put("/:id", update);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Deletes a user based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       201:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 */
route.delete("/:id", deleteUser);

export default route;
