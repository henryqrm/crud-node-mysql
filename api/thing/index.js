const Router = new require('express').Router();
const {
    create,
    read,
    update,
    destroy,
    index
} = require('./thing.controller');

Router.get('/:id', read);
Router.post('/', create);
Router.put('/:id', update);
Router.delete('/:id', destroy);
Router.get('/', index);

module.exports = Router;
