import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const studies = JSON.parse(fs.readFileSync(path.join(__dirname, "../studies.json"), "utf-8"));
const router = express.Router();

// GET all studies
router.get("/", (req, res) => {
  res.json(studies);
});

export default router;