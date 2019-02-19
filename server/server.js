const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./controllers/router.js');

const PORT = 3007;

const app = express();

app.use(morgan('combined'));

app.use(cors());

app.use(express.static(`${__dirname}/../client/dist`));

// app.get('/category/:productId/:relationship', router.read);

app.get('/category/:productId/', router.readDefault);

app.listen(PORT);
