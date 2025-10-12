import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import fs from 'fs/promises';

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
    origin:  process.env.FRONTEND_URL || "*",
    //origin: "http://localhost:4200",
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

// endpoint que devuelve todo junto
app.get('/api/all', async (req, res) => {
  try {
    const base = __dirname;
    const [projectsRaw, jobsRaw, studiesRaw] = await Promise.all([
      fs.readFile(path.join(base, 'projects.json'), 'utf8'),
      fs.readFile(path.join(base, 'jobs.json'), 'utf8'),
      fs.readFile(path.join(base, 'studies.json'), 'utf8'),
    ]);

    const projects = JSON.parse(projectsRaw);
    const jobs = JSON.parse(jobsRaw);
    const studies = JSON.parse(studiesRaw);

    res.json({ projects, jobs, studies });
  } catch (err) {
    console.error('Error reading JSON for /api/all:', err);
    res.status(500).json({ error: 'Could not load data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
