const database = require('../../config.js');

database.dropTableIfExists('products_index')
  .then()
  .catch();
