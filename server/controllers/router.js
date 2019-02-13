const db = require('../database/');

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
  // add search by category
  readDefault: (req, res) => {
    const relatedProducts = randomRelations(15, 100);
    db.select('*').from('products').whereIn('product_id', relatedProducts)
      .then((data) => {
        res.status(200).send(data);
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
