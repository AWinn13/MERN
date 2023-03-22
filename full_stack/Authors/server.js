require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

require('./server/config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({ extended : true }))

const routes = require('./server/routes/authors.routes');
routes(app);

app.listen(port, () => console.log('Express server is running', port));