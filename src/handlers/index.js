import { getData, setData } from '../helpers/index.js';

export const getPosts = (req, res) => {
  res.json(getData());
};

export const getOnePost = (req, res) => {
  const data = getData();
  const { id } = req.params;
  const idToInt = parseInt(id);
  const foundedPost = data.find(({ id }) => id === idToInt);

  res.json(foundedPost);
};

export const setOnePost = (req, res) => {};

export const updateOnePost = (req, res) => {};

export const deleteOnePost = (req, res) => {};
