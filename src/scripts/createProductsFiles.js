import { PATH_FILES_DIR } from '../constants/products.js';
import fs from 'node:fs/promises';
import { readProducts } from '../utils/readProducts.js';

const createProductsFiles = async () => {
  try {
    const products = await readProducts();
    for (const product of products) {
      const fileName = product.name
        .toLowerCase()
        .split(' ')
        .join('-')
        .concat('.json');
      const filePath = `${PATH_FILES_DIR}/${fileName}`;
      await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf8');
    }
  } catch (error) {
    console.log(error);
  }
};

createProductsFiles();
