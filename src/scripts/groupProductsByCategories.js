import { readProducts } from '../utils/readProducts.js';

const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();
    const grouped = products.reduce((acc, product) => {
      const { category, name } = product;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(name);
      return acc;
    }, {});

    console.log(grouped);
  } catch (error) {
    console.log(error);
  }
};

groupProductsByCategories();
