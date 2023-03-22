const AuthorController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAll)
    app.post('/api/authors', AuthorController.create)
    app.get('/api/authors/:id', AuthorController.getOne)
    app.put('/api/authors/:id', AuthorController.update)
    app.delete('/api/authors/:id', AuthorController.delete)
};