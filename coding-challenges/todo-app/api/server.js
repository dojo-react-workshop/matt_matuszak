const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json())

app.get('/ping', (request, response)=> {response.json({message:'hello'})})

require('./server/routes')(app);

app.listen(9500, () => console.log('started'))
