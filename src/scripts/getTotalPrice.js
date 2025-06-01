import { readProducts } from '../utils/readProducts.js';

const getTotalPrice = async () => {
  try {
    const products = await readProducts();
    let total = 0;
    for (const product of products) {
      total += Number(product.price);
    }
    console.log(total);
  } catch (error) {
    console.log(error);
  }
};

getTotalPrice();
