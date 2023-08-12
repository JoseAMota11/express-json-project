import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/index.js';
import {
  deleteOnePost,
  getOnePost,
  getPosts,
  setOnePost,
  updateOnePost,
} from './handlers/index.js';
import {
  idNotFound,
  preventUserFromAddingPostsWithTheSameId,
  preventUserFromSendingAnEmptyObject,
} from './middleware/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.post(routes.post, preventUserFromSendingAnEmptyObject);
app.post(routes.post, preventUserFromAddingPostsWithTheSameId);
app.use(routes.postById, idNotFound);

// Routes
app.get(routes.posts, getPosts);

app.get(routes.postById, getOnePost);

app.post(routes.post, setOnePost);

app.put(routes.postById, updateOnePost);

app.delete(routes.postById, deleteOnePost);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
