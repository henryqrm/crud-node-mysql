const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.listen(process.env.PORT || 8080, () => {
    console.log('Servidor online!');
});

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
