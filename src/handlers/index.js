import { getData, setData, superParseInt } from '../helpers/index.js';

export const getPosts = (req, res) => {
  res.json(getData());
};

export const getOnePost = (req, res) => {
  const data = getData();
  const { id } = req.params;
  const idToInt = superParseInt(id);
  const foundedPost = data.find(({ id }) => id === idToInt);

  res.json(foundedPost);
};

export const setOnePost = (req, res) => {
  const data = getData();
  const sentData = req.body;
  let newData = [...data, sentData];

  try {
    setData(newData);
  } catch (error) {
    console.error(error);
  }

  res.json(sentData);
};

export const updateOnePost = (req, res) => {
  const data = getData();
  const { id } = req.params;
  const idToInt = superParseInt(id);
  const sentData = req.body;

  const newData = data.map((post) => {
    if (post.id === idToInt) {
      return {
        id: idToInt,
        ...sentData,
      };
    }

    return post;
  });

  setData(newData);
  res.json({ massage: `Post with ID (${id}) was updated` });
};

export const deleteOnePost = (req, res) => {
  const data = getData();
  const { id } = req.params;
  const idToInt = superParseInt(id);
  const newData = data.filter(({ id }) => id !== idToInt);

  setData(newData);
  res.json({ massage: `Post with ID (${id}) was deleted` });
};
