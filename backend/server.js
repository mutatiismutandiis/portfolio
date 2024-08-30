import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import projectsRouter from "./routes/projects.js";
import jobsRouter from "./routes/jobs.js";
import studiesRouter from "./routes/studies.js";

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware to allow cors
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

// Middleware to serve images and logos
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/logos", express.static(path.join(__dirname, "logos")));

// Middleware to parse JSON
app.use(express.json());

// Routers
app.use("/api/projects", projectsRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/studies", studiesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
