import express from "express";
import { create, fetch, fetchByID } from "../controller/todoController.js";
const route = express.Router();

route.post("/", create);
route.get("/", fetch);
route.get("/:id", fetchByID);

export default route;
