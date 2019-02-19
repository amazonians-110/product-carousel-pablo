const faker = require('faker');
const db = require('../database');

db.schema.dropTableIfExists('products')
  .then(() => db.schema.createTable('products', (table) => {
    table.increments('product_id');
    table.string('name');
    table.string('image');
    table.decimal('price');
    table.decimal('avg_review', 2, 1);
    table.integer('review_count');
    table.boolean('is_prime');
    table.string('category');
    table.string('manufacturer');
  }))
  .then(() => {
    // fill with row objects
    const rows = [];
    for (let i = 0; i < 100; i += 1) {
      const product = {};
      product.name = faker.commerce.productName();
      product.price = faker.commerce.price();
      product.avg_review = Math.floor(Math.random() * 40 + 10) / 10;
      product.review_count = Math.floor(Math.random() * 5000);
      product.is_prime = faker.random.boolean();
      product.category = faker.commerce.department();
      product.manufacturer = faker.company.companyName();
      const rand = Math.random();
      if (rand < 0.34) {
        product.image = faker.image.food();
      } else if (rand < 0.67) {
        product.image = faker.image.technics();
      } else {
        product.image = faker.image.image();
      }
      rows.push(product);
    }
    return db('products').insert(rows);
  })
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    throw (err);
  });
