import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async ()=> {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(data || []);
    } catch (error) {
        console.log(error);
    }
};