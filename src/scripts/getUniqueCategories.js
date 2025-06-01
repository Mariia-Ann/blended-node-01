import { readProducts } from '../utils/readProducts.js';

const getUniqueCategories = async () => {
  try {
    const products = await readProducts();
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    console.log(uniqueCategories);
  } catch (error) {
    console.log(error);
  }
};

getUniqueCategories();
