const algoliasearch = require('algoliasearch');
const client = algoliasearch('MN8I8UO0AC', '48e14f065359d34167f565f01c453bf1');
const products = client.initIndex('magento2_devdefault_products');
const categories = client.initIndex('magento2_devdefault_categories');

const searchProducts = async (context: any, params: any): Promise<any> => {
  try {
    const { query } = params
    const response = await products.search(query, { hitsPerPage: 20 });
    return response;
  } catch (error) {
    return [];
  }
};

const searchCategories = async (context: any, params: any): Promise<any> => {
  try {
    const { query } = params
    const response = await categories.search(query, { hitsPerPage: 5 });
    return response;
  } catch (error) {
    return [];
  }
};

export default {
  searchProducts,
  searchCategories,
};
