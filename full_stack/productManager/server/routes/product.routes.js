const productController = require('../controllers/product.controller');
 
module.exports = app => {
    app.get('/api/products', productController.findAllproducts);
    app.get('/api/products/:id', productController.findOneproduct);
    app.put('/api/products/:id', productController.updateproduct);
    app.post('/api/products', productController.createproduct);
    app.delete('/api/products/:id', productController.deleteproduct);
}