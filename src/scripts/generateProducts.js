import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { faker } from '@faker-js/faker';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';

const generateContacts = async (number) => {
try {
    const products = await readProducts();

    const createProducts = faker.helpers.multiple(createFakeProduct, {
        count: number,
    });

    const updatedProducts = [...products, ...createProducts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedProducts), 'utf8');
} catch (error) {
    console.error(error);
}
};

generateContacts(4);