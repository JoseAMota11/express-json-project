import data from '../../data.json' assert { type: 'json' };

export const preventUserFromAddingPostsWithTheSameId = (req, res, next) => {
  const { id } = req.body;
  const idToInt = parseInt(id);
  const foundedPost = data.some(({ id }) => id === idToInt);

  if (foundedPost) {
    res
      .status(403)
      .json({ message: 'This ID is already used, please use another' });
    return;
  }

  next();
};

export const idNotFound = (req, res, next) => {
  const { id } = req.params;
  const idToInt = parseInt(id);
  const foundedPost = data.some(({ id }) => id === idToInt);

  if (!foundedPost) {
    res.status(404).json({ message: 'There is no post with that ID' });
    return;
  }

  next();
};
