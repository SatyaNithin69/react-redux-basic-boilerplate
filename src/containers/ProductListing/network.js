import ApiCore from '../../services/api/core/index';
export const fetchAllProducts = async () => {
  const fetchProductsConfig = new ApiCore({
    resource: 'products',
    getAll: true
  });
  let results = await fetchProductsConfig;
  return results;
};
