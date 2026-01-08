import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import route from "./routes/userRoute.js";
import todoRoute from "./routes/todoRoute.js";
import { swaggerUi, swaggerDocs } from "./swagger.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;


mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port : http://localhost:${PORT}`);
      console.log(`Swagger docs are available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: "Invalid JSON payload." });
  }
  next();
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/user", route);
app.use("/api/todo", todoRoute);