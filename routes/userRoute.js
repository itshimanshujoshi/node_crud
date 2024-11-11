// routes/userRoutes.js
import express from "express";
import { create, deleteUser, fetch, update } from "../controller/userController.js";

const route = express.Router();

/**
 * @swagger
 * /api/user/getallusers:
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
route.get("/getallusers", fetch);

/**
 * @swagger
 * /api/user/create:
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
route.post("/create", create);

/**
 * @swagger
 * /api/user/update/{id}:
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
route.put("/update/:id", update);

/**
 * @swagger
 * /api/user/delete/{id}:
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
route.delete("/delete/:id", deleteUser);

export default route;
