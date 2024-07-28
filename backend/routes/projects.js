import express from "express";
import projects from "../projects.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.json(projects);
});

module.exports = router;
