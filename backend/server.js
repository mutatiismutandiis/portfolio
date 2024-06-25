import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import projects from './projects.json' assert { type: 'json' };

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware to serve images
app.use('/images', express.static(path.join(__dirname, 'images')));


// Middleware to parse JSON
app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
