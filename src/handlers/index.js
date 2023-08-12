import data from '../../data.json' assert { type: 'json' };

export const getPosts = (req, res) => {
  res.json(data);
};

export const getOnePost = (req, res) => {
  const { id } = req.params;
  const idToInt = parseInt(id);
  const foundedPost = data.find(({ id }) => id === idToInt);

  res.json(foundedPost);
};

export const setOnePost = (req, res) => {};

export const updateOnePost = (req, res) => {};

export const deleteOnePost = (req, res) => {};
