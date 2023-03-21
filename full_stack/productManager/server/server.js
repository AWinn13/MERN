require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

const cors = require('cors')

require('./routes/product.routes')(app);

require('./config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.listen(port, () => console.log('Hello Clarice', port));