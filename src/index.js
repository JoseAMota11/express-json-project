import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/index.js';
import { getPosts } from './handlers/index.js';
import data from '../data.json' assert { type: 'json' };

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.post(routes.post, (req, res, next) => {
  const { id } = req.body;
  const idToInt = parseInt(id);
  const foundPost = data.some(({ id }) => id === idToInt);

  if (foundPost) {
    res
      .status(403)
      .json({ message: 'This is is already used, please use another' });
    return;
  }

  next();
});

app.get(routes.posts, getPosts);

app.get(routes.postById, (req, res) => {
  res.json({ massage: 'Hello World' });
});

app.post(routes.post, (req, res) => {
  res.json({ massage: 'Creating a post' });
});

app.put(routes.postById, (req, res) => {
  res.json({ massage: 'Updating a post' });
});

app.delete(routes.postById, (req, res) => {
  res.json({ massage: 'Deleting a post' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
