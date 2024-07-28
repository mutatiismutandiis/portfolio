import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import projects from './projects.json' assert { type: 'json' };

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware to allow cors
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Middleware to serve images and logos
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/logos', express.static(path.join(__dirname, 'logos')));

// Middleware to parse JSON
app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
