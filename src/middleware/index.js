import { getData, superParseInt } from '../helpers/index.js';

export const preventUserFromSendingAnEmptyObject = (req, res, next) => {
  const sentData = req.body;

  if (Object.keys(sentData).length === 0) {
    res.status(403).json({ message: "You can't send an empty object" });
    return;
  }

  next();
};

export const preventUserFromAddingPostsWithTheSameId = (req, res, next) => {
  const data = getData();
  const { id } = req.body;
  const idToInt = superParseInt(id);
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
  const data = getData();
  const { id } = req.params;
  const idToInt = superParseInt(id);
  const foundedPost = data.some(({ id }) => id === idToInt);

  if (!foundedPost) {
    res
      .status(404)
      .json({ message: `There is no post with that ID (${idToInt})` });
    return;
  }

  next();
};
