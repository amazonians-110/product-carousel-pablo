const express = require('express');
// const path = require('path');
const router = require('./controllers/router.js');

const PORT = 3007;

const app = express();

// app.use(some kind of middleware);

app.use(express.static(`${__dirname}/../client/dist`));

// app.get('/category/:productId/:relationship', router.read);

app.get('/category/:productId/', router.readDefault);

app.listen(PORT);
