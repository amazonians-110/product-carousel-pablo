const { fetchRelated } = require('../models/database.js');

module.exports = {

  readRelationship: (req, res) => {
    const id = req.params.productId;
    console.log(id);
    console.log('querying database');
    fetchRelated(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(503).send(err);
      });
  },
};
