const algoliasearch = require('algoliasearch');
const client = algoliasearch('MN8I8UO0AC', '48e14f065359d34167f565f01c453bf1');
const products = client.initIndex('magento2_devdefault_products');
const categories = client.initIndex('magento2_devdefault_categories');


const searchProducts = async (context: object, params: string): Promise<any> => {
  try {
    const response = await products.search(params, { hitsPerPage: 20 });
    return response;
  } catch (error) {
    return [];
  }
};

const searchCategories = async (context: object, params: string): Promise<any> => {
  try {
    const response = await categories.search(params, { hitsPerPage: 5 });
    return response;
  } catch (error) {
    return [];
  }
};

export default {
  searchProducts,
  searchCategories
};
