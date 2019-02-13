const db = require('../database/');

module.exports = {
  post: (req, res) => {
    res.status(201).send();
  },

  get: (req, res) => {
    const { productId } = req.params;
    db.select('*').from('products').where('product_id', productId)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  dbtest: (req, res) => {
    // db
    res.status(200).send(dummyData);
  },
};
