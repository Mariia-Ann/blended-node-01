import { readProducts } from '../utils/readProducts.js';

const getProductsByMinPrice = async (price) => {
  try {
    const products = await readProducts();
    const getProducts = products.filter((product) => product.price >= price);
    console.log(getProducts);
  } catch (error) {
    console.log(error);
  }
};

getProductsByMinPrice(200);
