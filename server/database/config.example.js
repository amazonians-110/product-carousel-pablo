module.exports = require('knex')({
  client: 'pg',
  connection: {
    /* user: 'FILL_ME_IN', // if you have a pg password
    password: 'FILL ME IN', */
    host: '127.0.0.1',
    database: 'amazon',
  },
});
