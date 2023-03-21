const productController = require('../controllers/product.controller');
 
module.exports = app => {
    app.get('/api/products', productController.findAllproducts);
    app.post('/api/products', productController.createProduct);
    app.get('/api/products/:id', productController.findOneproduct);
    app.put('/api/products/:id', productController.updateproduct);
    app.delete('/api/products/:id', productController.deleteproduct);
}