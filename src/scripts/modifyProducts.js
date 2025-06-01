import { PATH_DB } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';
import fs from 'node:fs/promises';

const modifyProducts = async () => {
  try {
    const products = await readProducts();
    const changeProducts = products.map(({ description, ...rest }) => rest);

    await fs.writeFile(PATH_DB, JSON.stringify(changeProducts), 'utf8');
  } catch (error) {
    console.log(error);
  }
};

modifyProducts();
