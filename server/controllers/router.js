const dummyData = {
  id: 5,
  name: 'laptop',
  image: 'http://loremflickr.com/160/160/dogs',
  price: '99.99',
  avg_review: '3.7',
  is_prime: 't',
  category: 'electronics',
  manufacturer: 'Acer',
};

module.exports = {
  post: (req, res) => {
    res.status(201).send();
  },

  get: (req, res) => {
    const { productId } = req.params;
    res.status(200).send(productId, dummyData);
  },
};
