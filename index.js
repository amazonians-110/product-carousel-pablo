const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const router = require('./server/controllers/router.js');

const PORT = 3007;

const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use(compression());

app.use(express.static(`${__dirname}/dist`));

app.get('/api', (request, response) => {
  response.sendFile(`${__dirname}/dist/bundle.js`);
});

app.get('/api/bundle', (req, res) => {
  res.sendFile(`${__dirname}/dist/bundle.js`);
});

app.get('/api/products/:productId/', router.readRelationship);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, console.log(`listening to ${PORT}`));
