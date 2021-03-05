const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Routes
const addRoute = require('./routes/add');
const deleteRoute = require('./routes/delete');
const reduceRoute = require('./routes/reduce');
const uniqueRoute = require('./routes/unique');


app.use('/add', addRoute);
app.use('/delete', deleteRoute);
app.use('/reduce', reduceRoute);
app.use('/unique', uniqueRoute);


//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//listening to the server
app.listen(3000);