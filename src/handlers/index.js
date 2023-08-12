import data from '../../data.json' assert { type: 'json' };

export const getPosts = (req, res) => {
  res.json(data);
};

export const getOnePost = (req, res) => {};

export const setOnePost = (req, res) => {};

export const updateOnePost = (req, res) => {};

export const deleteOnePost = (req, res) => {};
