const app = require('./config/middlewares');
const thingAPI = require('./api/thing');

app.get('/api/v1', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/api/v1/thing', thingAPI);

app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
