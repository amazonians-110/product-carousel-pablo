const express = require('express');
const router = require('./controllers/router.js');

const PORT = 3007;

const app = express();

// app.use(some kind of middleware);

app.get('/category/product/:productId', router.get);
// app.post('', router.post)

app.listen(PORT, console.log(`server listening to port ${PORT}`));