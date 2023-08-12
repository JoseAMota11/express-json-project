import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

const app = express();

app.get(routes.posts, (req, res) => {
  res.json({ massage: 'Hello World' });
});

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
