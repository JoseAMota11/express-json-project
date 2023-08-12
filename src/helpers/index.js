import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { __dirname } from '../../__dirname.js';

const dataPath = join(__dirname, 'data.json');

export const getData = () => {
  const data = readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

export const setData = (data) => {
  writeFileSync(dataPath, JSON.stringify(data), 'utf-8');
};

export const superParseInt = (id) => {
  if (!Number.isInteger(id) && id !== undefined) {
    const regex = new RegExp('[a-zA-Z]+', 'g');
    if (!id.match(regex)) return parseInt(id);

    return id;
  }

  return id;
};
