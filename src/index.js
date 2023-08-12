import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/index.js';
import { getPosts } from './handlers/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get(routes.posts, getPosts);

app.get(routes.postById, (req, res) => {
  res.json({ massage: 'Hello World' });
});

app.post(routes.post, (req, res) => {
  res.json({ massage: 'Hello World' });
});

app.put(routes.postById, (req, res) => {
  res.json({ massage: 'Hello World' });
});

app.delete(routes.postById, (req, res) => {
  res.json({ massage: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
