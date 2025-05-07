import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), 'src', 'data', 'db.json');
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read database' });
  }
} 