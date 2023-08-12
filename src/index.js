import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/index.js';
import { getOnePost, getPosts } from './handlers/index.js';
import {
  idNotFound,
  preventUserFromAddingPostsWithTheSameId,
} from './middleware/index.js';
import data from '../data.json' assert { type: 'json' };
import { getData, setData } from './helpers/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(routes.postById, idNotFound);
app.post(routes.post, preventUserFromAddingPostsWithTheSameId);

// Routes
app.get(routes.posts, getPosts);

app.get(routes.postById, getOnePost);

app.post(routes.post, (req, res) => {
  const data = getData();
  const sentData = req.body;
  let newData = [...data, sentData];

  try {
    setData(newData);
  } catch (error) {
    console.error(error);
  }

  res.json(sentData);
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
