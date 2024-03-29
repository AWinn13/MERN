const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

 require("./routes/joke.routes")(app);


app.listen(port, () => console.log(`Can you hear it: ${port}`) );
