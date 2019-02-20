const db = require('../database/config.js');

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

module.exports = {
  // add search by category
  readDefault: (req, res) => {
    const relatedProducts = randomRelations(15, 100);
    db.select('*').from('products').whereIn('product_id', relatedProducts)
      .then((data) => {
        const converted = data.map(convertSQLtoJS);
        // convert sql columns to camelcased js keys
        res.status(200).send(converted);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  // read: (req, res) => {
  //   const { productId, relationship } = req.params;
  //   db.select('*').from('products').where('product_id', productId)
  //     .then((data) => {
  //       res.status(200).send(data);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // },
  // post: (req, res) => {
  //   res.status(201).send();
  // },
};
