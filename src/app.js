const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let path = require('path');

//View engine
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
const http = require('http');
const server = http.createServer(app);

const mongoose = require('mongoose');
const MONGODB_URL = "mongodb://localhost:27017/fibo";

const DB_OPTIONS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose.connect(MONGODB_URL, DB_OPTIONS).then(() => {
    console.log('Mongodb started.');
    server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
}).catch(() => {
    console.log('Mongodb connection failed.');
});