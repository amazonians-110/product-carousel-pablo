const database = require('../../config');

const convertSQLtoJS = (product) => {
  const jsProduct = { ...product };
  jsProduct.id = product.product_id;
  delete jsProduct.product_id;
  jsProduct.avgReview = product.avg_review;
  delete jsProduct.avg_review;
  jsProduct.reviewCount = product.review_count;
  delete jsProduct.review_count;
  jsProduct.isPrime = product.is_prime;
  delete jsProduct.is_prime;
  // delete old keys from product?
  return jsProduct;
};

const randomRelations = (num, limit) => {
  const results = [];
  while (results.length < num) {
    const rand = Math.floor(Math.random() * limit);
    if (!results.includes(rand)) {
      results.push(rand);
    }
  }
  return results;
};

module.exports = {
  fetchRelated: (id) => {
    const relatedProducts = randomRelations(15, 100);
    return database.select('*').from('products').whereIn('product_id', relatedProducts)
      .then(data => convertSQLtoJS(data));
  },
};
