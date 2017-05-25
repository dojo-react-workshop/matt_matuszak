const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.use(express.static(path.join(__dirname, 'static')));

app.listen(7000, ()=> console.log('started'));
