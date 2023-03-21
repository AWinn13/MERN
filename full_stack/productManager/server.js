require('dotenv').config();
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')

require('./server/config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// !!DO NOT MOVE 
require('./server/routes/product.routes')(app);

app.listen(port, () => console.log('Hello Clarice', port));