import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jobs = JSON.parse(fs.readFileSync(path.join(__dirname, "../jobs.json"), "utf-8"));
const router = express.Router();

// GET all jobs
router.get("/", (req, res) => {
  res.json(jobs);
});

// GET job by id
router.get("/:id", (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const job = jobs.find(job => job.id === jobId);
  
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: "Job not found" });
  }
});

export default router;