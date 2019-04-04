const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


mongoose.connect('mongodb://localhost:27017/SimpleCRUD', {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

const Produto = require('./routes/routes.js');
const Usuario = require('./routes/routes.js');
const TelaInicial = require('./routes/routes.js');
const Dashboard = require('./routes/routes.js');

app.use('/usuario', Usuario)
app.use('/produto', Produto);
app.use('/', TelaInicial);
app.use('/dashboard', Dashboard)




const port = 4000;

app.listen(port, ()=> {
    console.log('Server está rodando em http://localhost: ' + port);
});

