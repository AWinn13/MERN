require('dotenv').config();
const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.DB_USERNAME;
const pw = process.env.DB_PASSWORD;
const DBURI = process.env.dbURI;
const uri = `mongodb+srv://${username}:${pw}@${DBURI}?retryWrites=true&w=majority`;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


    