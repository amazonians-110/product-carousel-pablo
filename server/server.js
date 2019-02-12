const express = require('express');
// const path = require('path');
const router = require('./controllers/router.js');

const PORT = 3007;

const app = express();

// app.use(some kind of middleware);

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/category/product/:productId', router.get);

app.get('/test', router.dbtest);
// app.post('', router.post)

app.listen(PORT);
