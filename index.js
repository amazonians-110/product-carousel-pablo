const express = require('express');
<<<<<<< HEAD
=======
const morgan = require('morgan');
>>>>>>> feature-junctions
const cors = require('cors');
const compression = require('compression');
const router = require('./server/controllers/router.js');

const app = express();

<<<<<<< HEAD
=======
app.use(morgan('tiny'));

>>>>>>> feature-junctions
app.use(cors());

app.use(compression());

app.use(express.static(`${__dirname}/dist`));

app.get('/api/bundle', (req, res) => {
  res.sendFile(`${__dirname}/dist/bundle.js`);
});

app.get('/api/products/:productId/', router.readRelationship);

app.get('/products/:id', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('*', (req, res) => {
  res.redirect('/products/1');
});

app.listen(3007, console.log('listening to 3007'));
