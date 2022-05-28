const express = require('express')
const app = express()
const router = require('./routes/main');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//server listen
app.use('/', router);
app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
})
